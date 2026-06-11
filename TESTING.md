# Testing Guide

## Backend Testing

### Manual API Testing with cURL

```bash
# Register
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'

# Login
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Analyze Skills
curl -X POST http://localhost:5000/api/skill-gap/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "currentSkills": ["javascript", "react", "node.js"]
  }'

# Get Career Paths
curl -X POST http://localhost:5000/api/career-path/predict \
  -H "Content-Type: application/json" \
  -d '{
    "currentRole": "Software Engineer",
    "experience": 3,
    "skills": ["javascript", "react", "node.js"]
  }'

# Get Job Market Trends
curl http://localhost:5000/api/job-market/trends

# Get In-Demand Roles
curl http://localhost:5000/api/job-market/roles

# Calculate Salary
curl -X POST http://localhost:5000/api/salary-negotiation/calculate \
  -H "Content-Type: application/json" \
  -d '{
    "role": "senior-developer",
    "yearsExperience": 5,
    "skills": ["kubernetes", "ai"],
    "location": "silicon-valley"
  }'

# Get Learning Path
curl http://localhost:5000/api/learning-path/web-development
```

## Frontend Testing

### Component Testing
```bash
# Navigate to frontend
cd frontend

# Run tests (if configured)
npm test

# Build for production
npm run build

# Start development server
npm start
```

## Integration Testing

Test the full flow:
1. Register a new user
2. Login
3. Analyze skills
4. Get career recommendations
5. View market trends
6. Calculate salary negotiation range
