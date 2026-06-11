import express from 'express';

const router = express.Router();

const CAREER_PATHS = {
  'software-engineer': {
    progression: ['Junior Developer', 'Senior Developer', 'Tech Lead', 'Engineering Manager'],
    avgSalaryProgression: [80000, 110000, 140000, 160000],
    requiredSkills: ['programming', 'data-structures', 'system-design'],
    yearsToProgress: [2, 3, 4, 5]
  },
  'data-scientist': {
    progression: ['Junior Data Scientist', 'Data Scientist', 'Senior Data Scientist', 'ML Engineer'],
    avgSalaryProgression: [90000, 120000, 150000, 170000],
    requiredSkills: ['python', 'machine-learning', 'statistics', 'sql'],
    yearsToProgress: [2, 3, 4, 5]
  },
  'product-manager': {
    progression: ['Associate PM', 'Product Manager', 'Senior PM', 'Director of Product'],
    avgSalaryProgression: [85000, 115000, 145000, 180000],
    requiredSkills: ['product-strategy', 'analytics', 'leadership'],
    yearsToProgress: [2, 3, 4, 6]
  }
};

router.post('/predict', (req, res) => {
  try {
    const { currentRole, experience, skills } = req.body;
    
    const matchedPaths = Object.entries(CAREER_PATHS).map(([role, path]) => {
      const skillMatch = skills.filter(s => path.requiredSkills.includes(s)).length;
      const matchScore = (skillMatch / path.requiredSkills.length) * 100;
      
      const currentLevelIndex = Math.min(Math.floor(experience / 2), path.progression.length - 1);
      const futureSalary = path.avgSalaryProgression[Math.min(currentLevelIndex + 1, path.progression.length - 1)];
      
      return {
        careerPath: role,
        matchScore: Math.round(matchScore),
        nextRole: path.progression[Math.min(currentLevelIndex + 1, path.progression.length - 1)],
        timeToNextRole: path.yearsToProgress[Math.min(currentLevelIndex, path.yearsToProgress.length - 1)],
        projectedSalary: futureSalary,
        skillsToLearn: path.requiredSkills.filter(s => !skills.includes(s))
      };
    });

    const topPaths = matchedPaths.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
    
    res.json({
      recommendedPaths: topPaths,
      advice: 'Consider roles with highest match scores'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
