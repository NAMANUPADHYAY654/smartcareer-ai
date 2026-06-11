import express from 'express';

const router = express.Router();

// Mock job market data
const JOB_MARKET_DATA = {
  'software-engineer': { demand: 95, avgSalary: 115000, growth: 8 },
  'data-scientist': { demand: 92, avgSalary: 130000, growth: 12 },
  'product-manager': { demand: 85, avgSalary: 125000, growth: 7 },
  'devops-engineer': { demand: 88, avgSalary: 135000, growth: 10 },
  'ai-ml-engineer': { demand: 96, avgSalary: 140000, growth: 18 }
};

const SKILL_TRENDS = {
  'python': { trend: 'up', growth: 15, marketShare: 28 },
  'javascript': { trend: 'up', growth: 10, marketShare: 25 },
  'kubernetes': { trend: 'up', growth: 20, marketShare: 18 },
  'aws': { trend: 'up', growth: 14, marketShare: 22 },
  'machine-learning': { trend: 'up', growth: 25, marketShare: 30 },
  'react': { trend: 'stable', growth: 8, marketShare: 20 }
};

router.get('/trends', (req, res) => {
  try {
    const trends = Object.entries(SKILL_TRENDS).map(([skill, data]) => ({
      skill,
      ...data
    })).sort((a, b) => b.growth - a.growth);

    res.json({
      emergingSkills: trends.slice(0, 3),
      stableSkills: trends.slice(3),
      prediction: 'AI/ML and Cloud technologies continue to dominate job market'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/roles', (req, res) => {
  try {
    const roles = Object.entries(JOB_MARKET_DATA).map(([role, data]) => ({
      role,
      ...data
    })).sort((a, b) => b.demand - a.demand);

    res.json({
      hotRoles: roles.slice(0, 3),
      allRoles: roles
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
