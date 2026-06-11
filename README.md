# SmartCareer AI - Personalized Career Growth Intelligence Platform

## 🚀 Overview

SmartCareer AI is an innovative MERN-stack platform that uses AI and machine learning to provide personalized career guidance. It analyzes job market trends, identifies skill gaps, and recommends optimal career paths for professionals.

## ✨ Features

- **Skill Gap Analysis**: Identifies missing skills for career growth with market demand data
- **Career Path Prediction**: ML-based recommendations for next career moves with salary projections
- **Job Market Intelligence**: Real-time trends showing emerging skills and high-demand roles
- **Salary Predictor**: Estimates salary progression based on skills and experience
- **Personalized Dashboard**: Visual insights into career growth opportunities
- **User Authentication**: Secure login and profile management

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router, Tailwind CSS, Chart.js
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **ML/Data**: Natural Language Processing for skill extraction and matching
- **DevOps**: Docker, Docker Compose
- **Deployment**: Render, Railway, or Heroku

## 📋 Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Docker & Docker Compose (optional)
- npm or yarn

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/NAMANUPADHYAY654/smartcareer-ai.git
cd smartcareer-ai
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

Backend runs on `http://localhost:5000`

3. **Frontend Setup** (in a new terminal)
```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

### Using Docker Compose

```bash
docker-compose up --build
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- MongoDB: `localhost:27017`

## 📊 API Endpoints

### User Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile/:id` - Get user profile
- `PUT /api/users/profile/:id` - Update user profile

### Skill Analysis
- `POST /api/skill-gap/analyze` - Analyze skill gaps

### Career Paths
- `POST /api/career-path/predict` - Predict career paths

### Job Market
- `GET /api/job-market/trends` - Get emerging skill trends
- `GET /api/job-market/roles` - Get in-demand roles

## 🔐 Environment Variables

Create `.env` files:

**Backend (.env)**
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcareer
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📈 Project Structure

```
smartcareer-ai/
├── backend/
│   ├── app/
│   │   └── ml_models/
│   ├── models/
│   │   ├── User.js
│   │   └── Job.js
│   ├── routes/
│   │   ├── user.js
│   │   ├── skillGap.js
│   │   ├── careerPath.js
│   │   └── jobMarket.js
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🌐 Deployment

### Deploy on Render

1. Push code to GitHub: `https://github.com/NAMANUPADHYAY654/smartcareer-ai`
2. Connect Render to GitHub
3. Create Backend Service:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add Environment Variables
4. Create Frontend Service:
   - Build Command: `npm run build`
   - Set REACT_APP_API_URL to backend URL

### Deploy on Railway

1. Connect GitHub repo
2. Create services for backend and frontend
3. Add MongoDB (Railway provides it)
4. Set environment variables
5. Deploy!

**Live Demo**: (Will be updated after deployment)

## 🧠 ML/AI Features

- **Skill Extraction**: NLP-based skill identification from resumes
- **Job Matching**: Semantic similarity matching between user profile and jobs
- **Trend Analysis**: Identifies emerging technologies using market data
- **Salary Prediction**: Forecasts salary progression based on skills and experience
- **Career Recommendations**: Suggests optimal career paths using classification models

## 👥 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

MIT License - feel free to use this project

## 👨‍💻 Author

**Naman Upadhyay**
- GitHub: [@NAMANUPADHYAY654](https://github.com/NAMANUPADHYAY654)
- Email: your-email@example.com

## 🙏 Acknowledgments

- Inspired by real career challenges faced by professionals
- Built with modern web technologies and best practices
- Ready for production deployment and scaling

---

**⭐ If you find this project helpful, please give it a star!**

## 📞 Support

For issues, questions, or suggestions, please open an GitHub issue or contact the maintainer.

**Happy Career Growth! 🚀**
