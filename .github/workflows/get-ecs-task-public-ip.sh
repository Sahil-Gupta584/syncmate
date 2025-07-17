CLUSTER="syncmate"
SERVICE="$1"
REGION="eu-north-1"
MAX_RETRIES=20
SLEEP_SECONDS=10

if [[ -z "$SERVICE" ]]; then
  echo "❌ Usage: $0 <cluster> <service-name> <region>"
  exit 1
fi

echo "🔁 Waiting for ECS service '$SERVICE' in cluster 'syncmate' to start a task with public IP..."

for((i=1;i<=MAX_RETRIES;i++)); do
 TASK_ARN=$(aws ecs list-tasks --cluster "$CLUSTER" --service-name "$SERVICE" --desired-status RUNNING --region "$REGION" --query "taskArns[-1]" --output "text")
  echo "response :$TASK_ARN
 if [[-z "$TASK_ARN" || $TASK_ARN=="None"]];then
    echo "[$i/$MAX_RETRIES] task not yet running..waiting"
    sleep "$SLEEP_SECONDS"
    continue
 fi

  ENI_ID=$(aws ecs describe-tasks \
    --cluster "$CLUSTER" \
    --tasks "$TASK_ARN" \
    --region "$REGION" \
    --query "tasks[0].attachments[0].details[?name=='networkInterfaceId'].value" \
    --output text)

  if [[ -z "$ENI_ID" ]]; then
    echo "[$i/$MAX_RETRIES] ENI not attached yet...waiting"
    sleep "$SLEEP_SECONDS"
    continue
  fi

  PUBLIC_IP=$(aws ec2 describe-network-interfaces \
    --network-interface-ids "$ENI_ID" \
    --region "$REGION" \
    --query "NetworkInterfaces[0].Association.PublicIp" \
    --output text)

  if [[ "$PUBLIC_IP" == "None" || -z "$PUBLIC_IP" ]]; then
    echo "[$i/$MAX_RETRIES] Public IP not assigned yet...waiting"
    sleep "$SLEEP_SECONDS"
  else
    echo "public ip is: '$PUBLIC_IP'"
    echo "ip=$PUBLIC_IP" >> "$GITHUB_OUTPUT"
    exit 0
  fi
done

echo "❌ Timed out waiting for public IP for service '$SERVICE'."
exit 1