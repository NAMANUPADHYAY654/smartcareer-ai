import express from 'express';

// Middleware to log requests
export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
};

// Error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    error: {
      status,
      message,
      timestamp: new Date().toISOString()
    }
  });
};

// Not found middleware
export const notFound = (req, res, next) => {
  res.status(404).json({
    error: {
      status: 404,
      message: 'Route not found',
      path: req.path
    }
  });
};
