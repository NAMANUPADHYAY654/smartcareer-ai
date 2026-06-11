// Input validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateSkills = (skills) => {
  return Array.isArray(skills) && skills.length > 0 && skills.every(skill => typeof skill === 'string');
};

export const validateUserInput = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!validateEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  if (!validatePassword(data.password)) {
    errors.push('Password must be at least 6 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
