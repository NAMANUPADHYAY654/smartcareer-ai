# System Architecture

## High-Level Architecture

```
┌─────────────┐
│   Browser   │
│  (React)    │
└──────┬──────┘
       │ HTTP/REST
┌──────▼──────────────────┐
│  Frontend (Port 3000)   │
│  - React Components     │
│  - State Management     │
│  - API Integration      │
└──────┬──────────────────┘
       │ HTTP/REST (TLS)
┌──────▼──────────────────┐
│  API Server (Port 5000) │
│  - Express.js           │
│  - Business Logic       │
│  - Authentication       │
└──────┬──────────────────┘
       │ MongoDB Protocol
┌──────▼──────────────────┐
│  MongoDB Database       │
│  - User Collections     │
│  - Job Data             │
│  - Analytics Events     │
└─────────────────────────┘
```

## Component Architecture

### Frontend
- **App Component** - Main entry point
- **Pages** - Route components
- **Components** - Reusable UI components
- **Services** - API communication
- **Hooks** - Custom React hooks
- **Utilities** - Helper functions

### Backend
- **Routes** - API endpoints
- **Models** - Database schemas
- **Middleware** - Request processing
- **Services** - Business logic
- **Utils** - Helper functions

### Database
- **Users** - User profiles and auth
- **Jobs** - Job listings
- **Analytics** - User events

## Data Flow

1. User interacts with frontend
2. Frontend sends API request
3. Backend validates and processes
4. Database is queried/updated
5. Response sent back to frontend
6. UI updated with new data

## Security Layers

1. **Input Validation** - Server-side validation
2. **Authentication** - JWT tokens
3. **Authorization** - Role-based access
4. **Encryption** - TLS for transit, bcrypt for passwords
5. **Rate Limiting** - DDoS protection
6. **CORS** - Cross-origin restrictions
