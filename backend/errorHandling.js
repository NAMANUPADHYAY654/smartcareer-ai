// Error handling utilities
export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export const handleError = (error) => {
  if (error.isOperational) {
    return {
      status: error.statusCode,
      message: error.message
    };
  }

  return {
    status: 500,
    message: 'An unexpected error occurred'
  };
};

export const AsyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
