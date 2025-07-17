#!/bin/bash

# Check for jq dependency
if ! command -v jq &> /dev/null; then
    echo "❌ jq is required but not installed. Please install jq."
    exit 1
fi

CLUSTER="syncmate"
SERVICE="$1"
REGION="eu-north-1"
MAX_RETRIES=20
SLEEP_SECONDS=10

if [[ -z "$SERVICE" ]]; then
    echo "❌ Usage: $0 <service-name>"
    exit 1
fi

echo "🔁 Waiting for ECS service '$SERVICE' in cluster 'syncmate' to start a task with public IP..."

for ((i=1; i<=MAX_RETRIES; i++)); do
    # Get list of all running task ARNs
    TASK_ARNS=$(aws ecs list-tasks \
        --cluster "$CLUSTER" \
        --service-name "$SERVICE" \
        --desired-status RUNNING \
        --region "$REGION" \
        --query "taskArns" \
        --output json)
    TASK_ARNS_ALL=$(aws ecs list-tasks \
        --cluster "$CLUSTER" \
        --service-name "$SERVICE" \
        --region "$REGION" \
        --query "taskArns" \
        --output json)
    echo "response: $TASK_ARNS"  
    echo "response all tasks: $TASK_ARNS_ALL"  
    if [[ -z "$TASK_ARNS" || "$TASK_ARNS" == "[]" ]]; then
        echo "[$i/$MAX_RETRIES] No running tasks found...waiting"
        sleep "$SLEEP_SECONDS"
        continue
    fi

    # Describe all tasks to find the latest one
    TASKS_JSON=$(aws ecs describe-tasks \
        --cluster "$CLUSTER" \
        --tasks $(echo "$TASK_ARNS" | jq -r 'join(" ")') \
        --region "$REGION")
    
    # Find the latest task by startedAt time
    LATEST_TASK_ARN=$(echo "$TASKS_JSON" | jq -r '.tasks | sort_by(.startedAt) | last | .taskArn')
    
    if [[ -z "$LATEST_TASK_ARN" || "$LATEST_TASK_ARN" == "null" ]]; then
        echo "[$i/$MAX_RETRIES] Could not identify latest task...waiting"
        sleep "$SLEEP_SECONDS"
        continue
    fi

    # Extract ENI for the latest task
    ENI_ID=$(echo "$TASKS_JSON" | jq -r --arg arn "$LATEST_TASK_ARN" '
        .tasks[]
        | select(.taskArn == $arn)
        | .attachments[0].details[]
        | select(.name == "networkInterfaceId").value
    ')
    
    if [[ -z "$ENI_ID" || "$ENI_ID" == "null" ]]; then
        echo "[$i/$MAX_RETRIES] ENI not attached to latest task...waiting"
        sleep "$SLEEP_SECONDS"
        continue
    fi

    # Get public IP from ENI
    PUBLIC_IP=$(aws ec2 describe-network-interfaces \
        --network-interface-ids "$ENI_ID" \
        --region "$REGION" \
        --query "NetworkInterfaces[0].Association.PublicIp" \
        --output text)
    
    if [[ "$PUBLIC_IP" == "None" || -z "$PUBLIC_IP" ]]; then
        echo "[$i/$MAX_RETRIES] Public IP not assigned to ENI $ENI_ID...waiting"
        sleep "$SLEEP_SECONDS"
    else
        echo "✅ Public IP found for latest task!"
        echo "Task ARN: $LATEST_TASK_ARN"
        echo "Public IP: $PUBLIC_IP"
        echo "ip=$PUBLIC_IP" >> "$GITHUB_OUTPUT"
        exit 0
    fi
done

echo "❌ Timed out waiting for public IP for service '$SERVICE'."
exit 1