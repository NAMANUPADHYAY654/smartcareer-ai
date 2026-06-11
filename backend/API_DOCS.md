# API Documentation

## Base URL
```
https://smartcareer-ai-backend.onrender.com/api
```

## Endpoints

### Authentication
- `POST /users/register` - Register new user
- `POST /users/login` - User login
- `GET /users/profile/:id` - Get user profile
- `PUT /users/profile/:id` - Update profile

### Skill Analysis
- `POST /skill-gap/analyze` - Analyze skill gaps
  ```json
  {
    "currentSkills": ["javascript", "react"]
  }
  ```

### Career Paths
- `POST /career-path/predict` - Get career recommendations
  ```json
  {
    "currentRole": "Software Engineer",
    "experience": 3,
    "skills": ["javascript", "react", "node.js"]
  }
  ```

### Job Market
- `GET /job-market/trends` - Get emerging skill trends
- `GET /job-market/roles` - Get in-demand roles

### Salary Negotiation
- `POST /salary-negotiation/calculate` - Calculate negotiation range
  ```json
  {
    "role": "senior-developer",
    "yearsExperience": 5,
    "skills": ["kubernetes", "ai"],
    "location": "silicon-valley"
  }
  ```

### Learning Paths
- `GET /learning-path` - Get all learning paths
- `GET /learning-path/:track` - Get specific learning path
  - Tracks: `web-development`, `data-science`, `devops`

## Response Format
```json
{
  "data": {...},
  "success": true,
  "timestamp": "2026-06-11T10:00:00Z"
}
```

## Error Handling
```json
{
  "error": {
    "status": 400,
    "message": "Invalid request"
  }
}
```
