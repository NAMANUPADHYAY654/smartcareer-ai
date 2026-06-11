# 🚀 SmartCareer AI - Deployment Guide

## Quick Deployment (5 minutes)

### Step 1: Push to GitHub

```bash
# Navigate to project
cd smartcareer-ai

# Add remote repository
git remote add origin https://github.com/NAMANUPADHYAY654/smartcareer-ai.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy Backend on Render

1. Go to [render.com](https://render.com)
2. Sign up / Log in with GitHub
3. Click "New +" → "Web Service"
4. Select your GitHub repository: `smartcareer-ai`
5. Configure:
   - **Name**: `smartcareer-ai-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

6. Add Environment Variables:
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/smartcareer
   JWT_SECRET=your_secret_key_here
   NODE_ENV=production
   FRONTEND_URL=https://smartcareer-ai.onrender.com
   ```

7. Click "Create Web Service"
8. Wait for deployment (2-3 minutes)
9. Copy your backend URL: `https://smartcareer-ai-backend.onrender.com`

### Step 3: Deploy Frontend on Render

1. On Render, click "New +" → "Static Site"
2. Select the same GitHub repository
3. Configure:
   - **Name**: `smartcareer-ai-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/build`

4. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://smartcareer-ai-backend.onrender.com/api
   ```

5. Click "Create Static Site"
6. Wait for deployment (2-3 minutes)
7. Copy your frontend URL: `https://smartcareer-ai.onrender.com`

---

## Alternative: Deploy on Railway.app

### Backend Deployment

1. Go to [railway.app](https://railway.app)
2. Connect GitHub account
3. Create new project from GitHub
4. Select `smartcareer-ai` repository
5. Add service → Node.js
6. Configure:
   - **Working Directory**: `backend`
   - **Start Command**: `npm start`
   - **Build Command**: `npm install`

7. Add variables (same as Render)
8. Deploy automatically

### Frontend Deployment

1. Add service → Node.js (for build)
2. Configure static site serving
3. Set build command: `npm run build`
4. Point to `build` folder

---

## Alternative: Deploy with Heroku (Requires Credit Card)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create backend app
heroku create smartcareer-ai-backend
git push heroku main

# Create frontend app
heroku create smartcareer-ai-frontend
```

---

## ⚡ Quick Local Testing Before Deployment

```bash
# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Set up .env files
# Backend: backend/.env
# Frontend: frontend/.env

# Start both services
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
cd frontend && npm start
```

---

## 📊 Production Checklist

- [ ] Push to GitHub
- [ ] Set up backend on cloud (Render/Railway)
- [ ] Set up frontend on cloud
- [ ] Verify API connectivity
- [ ] Test all features
- [ ] Monitor error logs
- [ ] Set up custom domain (optional)

---

## 🔧 Troubleshooting

### Backend won't start
```bash
# Check logs on Render dashboard
# Verify MONGODB_URI is correct
# Check JWT_SECRET is set
```

### Frontend can't reach API
```
# Update REACT_APP_API_URL in environment variables
# Check CORS settings in backend/server.js
# Verify backend is actually running
```

### MongoDB connection error
```
# Ensure IP whitelist includes 0.0.0.0/0 on MongoDB Atlas
# Verify connection string format
# Check database name is correct
```

---

## 📱 Your Deployment Links (After Deployment)

**Backend API**: `https://smartcareer-ai-backend.onrender.com`
**Frontend App**: `https://smartcareer-ai.onrender.com`

---

## 💡 Pro Tips

- Use free tier on Render/Railway for MVP
- Enable auto-deploy from GitHub for continuous deployment
- Monitor your free tier usage
- Set up error tracking (Sentry) for production
- Use GitHub secrets for sensitive data

---

## 🎉 Success!

Your SmartCareer AI platform is now live and accessible to the world!

**Next Steps**:
1. Share the live link on your portfolio
2. Add to GitHub profile
3. Update LinkedIn with the live demo
4. Consider writing a blog post about the project
5. Gather user feedback and iterate

---

**Need help?** Check the README.md or create a GitHub issue!
