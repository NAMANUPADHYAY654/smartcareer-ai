// Utility functions for data transformation
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const formatPercentage = (value) => {
  return `${(value * 100).toFixed(1)}%`;
};

export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

export const slugify = (str) => {
  return str.toLowerCase().replace(/\s+/g, '-');
};

export const parseJWT = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')
  );
  return JSON.parse(jsonPayload);
};

export const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
