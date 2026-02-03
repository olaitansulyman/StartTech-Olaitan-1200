# StartTech Application

Full-stack application with React frontend and Node.js backend, deployed on AWS.

## Architecture

- **Frontend**: React app deployed to S3 + CloudFront
- **Backend**: Node.js API on EC2 with Auto Scaling
- **Cache**: ElastiCache Redis
- **Database**: MongoDB Atlas
- **Infrastructure**: Terraform modules

## Local Development

### Frontend
```bash
cd frontend
npm install
npm start
