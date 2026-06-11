// API service for frontend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  register(data) {
    return this.request('/users/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  login(email, password) {
    return this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  }

  // Skill endpoints
  analyzeSkills(skills) {
    return this.request('/skill-gap/analyze', {
      method: 'POST',
      body: JSON.stringify({ currentSkills: skills })
    });
  }

  // Career endpoints
  getCareerPaths(profile) {
    return this.request('/career-path/predict', {
      method: 'POST',
      body: JSON.stringify(profile)
    });
  }

  // Market endpoints
  getJobMarketTrends() {
    return this.request('/job-market/trends');
  }

  getInDemandRoles() {
    return this.request('/job-market/roles');
  }

  // Salary endpoints
  calculateSalary(profile) {
    return this.request('/salary-negotiation/calculate', {
      method: 'POST',
      body: JSON.stringify(profile)
    });
  }

  // Learning path
  getLearningPath(track) {
    return this.request(`/learning-path/${track}`);
  }
}

export default new APIService(API_BASE_URL);
