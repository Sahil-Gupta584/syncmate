#!/bin/bash

# Load environment variables from .env file
if [ ! -f .env ]; then
    echo "Error: .env file not found!"
    exit 1
fi

# Source the .env file
set -a
source .env
set +a

# Build the Docker image with all build args
docker build -t syncmate-backend -f docker/Dockerfile.backend \
  --build-arg VITE_BACKEND_URL="$VITE_BACKEND_URL" \
  --build-arg GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID" \
  --build-arg GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET" \
  --build-arg EDITOR_AUTH_SECRET="$EDITOR_AUTH_SECRET" \
  --build-arg CREATOR_AUTH_SECRET="$CREATOR_AUTH_SECRET" \
  --build-arg NODEMAILER_USER="$NODEMAILER_USER" \
  --build-arg NODEMAILER_PASS="$NODEMAILER_PASS" \
  --build-arg REDIS_URL="$REDIS_URL" \
  --build-arg DATABASE_URL="$DATABASE_URL" \
  --build-arg VITE_CREATOR_BASE_URL="$VITE_CREATOR_BASE_URL" \
  --build-arg VITE_EDITOR_BASE_URL="$VITE_EDITOR_BASE_URL" \
  --build-arg RAZORPAY_WEBHOOK_SECRET="$RAZORPAY_WEBHOOK_SECRET" \
  .

echo "Build complete!"
