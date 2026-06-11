// Configuration file for environment setup
export const config = {
  development: {
    apiUrl: 'http://localhost:5000/api',
    debug: true,
    logging: 'verbose'
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL,
    debug: false,
    logging: 'error'
  },
  
  features: {
    enableAnalytics: true,
    enableNotifications: true,
    enableDarkMode: true,
    enableSocialShare: true
  },
  
  thresholds: {
    skillGapMinScore: 60,
    careerPathMinMatch: 50,
    marketTrendMinGrowth: 5
  },
  
  pagination: {
    itemsPerPage: 10,
    maxItems: 100
  },
  
  timeouts: {
    apiRequest: 30000,
    sessionTimeout: 1800000 // 30 minutes
  }
};

export const getConfig = () => {
  const env = process.env.NODE_ENV || 'development';
  return config[env];
};
