import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import skillGapRoutes from './routes/skillGap.js';
import careerPathRoutes from './routes/careerPath.js';
import jobMarketRoutes from './routes/jobMarket.js';
import userRoutes from './routes/user.js';
import salaryNegotiationRoutes from './routes/salaryNegotiation.js';
import learningPathRoutes from './routes/learningPath.js';
import { requestLogger, errorHandler, notFound } from './middleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(requestLogger);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smartcareer')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/skill-gap', skillGapRoutes);
app.use('/api/career-path', careerPathRoutes);
app.use('/api/job-market', jobMarketRoutes);
app.use('/api/salary-negotiation', salaryNegotiationRoutes);
app.use('/api/learning-path', learningPathRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'SmartCareer AI Backend Running', timestamp: new Date() });
});

// 404 handler
app.use(notFound);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
