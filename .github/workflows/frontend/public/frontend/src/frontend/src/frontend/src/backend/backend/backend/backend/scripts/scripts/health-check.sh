#!/bin/bash

ALB_DNS=${1:-"backend-alb-123456789.us-west-2.elb.amazonaws.com"}

echo "Running health checks..."

response=$(curl -s -o /dev/null -w "%{http_code}" http://$ALB_DNS/health)

if [ $response -eq 200 ]; then
    echo "✅ Backend health check passed"
else
    echo "❌ Backend health check failed (HTTP $response)"
    exit 1
fi

echo "All health checks passed!"
