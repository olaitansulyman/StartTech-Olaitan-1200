#!/bin/bash
set -e

BUCKET_NAME=${1:-"starttech-frontend-bucket"}
DISTRIBUTION_ID=${2:-"E1234567890123"}

echo "Deploying frontend to S3..."

cd frontend
npm ci
npm test -- --watchAll=false
npm run build
aws s3 sync build/ s3://$BUCKET_NAME --delete
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Frontend deployment completed!"
