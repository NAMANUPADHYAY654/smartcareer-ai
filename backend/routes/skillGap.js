import express from 'express';

const router = express.Router();

// Simple skill gap analysis
const MARKET_SKILLS = {
  'python': { demand: 95, salary: 120000 },
  'javascript': { demand: 92, salary: 110000 },
  'react': { demand: 90, salary: 115000 },
  'kubernetes': { demand: 88, salary: 130000 },
  'aws': { demand: 85, salary: 125000 },
  'machine-learning': { demand: 87, salary: 135000 },
  'data-analysis': { demand: 80, salary: 105000 },
  'node.js': { demand: 85, salary: 112000 }
};

router.post('/analyze', (req, res) => {
  try {
    const { currentSkills } = req.body;
    
    const gaps = [];
    Object.entries(MARKET_SKILLS).forEach(([skill, data]) => {
      if (!currentSkills.includes(skill)) {
        gaps.push({
          skill,
          demandScore: data.demand,
          potentialSalary: data.salary,
          priority: data.demand > 90 ? 'high' : 'medium'
        });
      }
    });

    const sortedGaps = gaps.sort((a, b) => b.demandScore - a.demandScore);
    
    res.json({
      skillGaps: sortedGaps.slice(0, 5),
      recommendation: 'Focus on high-demand skills to increase market value',
      estimatedSalaryIncrease: sortedGaps.length > 0 ? sortedGaps[0].potentialSalary : 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
