import express from 'express';

const router = express.Router();

// Salary information by role and experience
const SALARY_DATA = {
  'junior-developer': { base: 60000, increment: 5000 },
  'senior-developer': { base: 110000, increment: 8000 },
  'tech-lead': { base: 140000, increment: 10000 },
  'data-scientist': { base: 90000, increment: 7000 },
  'product-manager': { base: 100000, increment: 12000 }
};

// Salary negotiation assistant
router.post('/calculate', (req, res) => {
  try {
    const { role, yearsExperience, skills, location } = req.body;
    
    const roleData = SALARY_DATA[role] || { base: 70000, increment: 5000 };
    const baseSalary = roleData.base + (yearsExperience * roleData.increment);
    
    // Skill bonus (5% per premium skill)
    const premiumSkills = ['kubernetes', 'machine-learning', 'ai', 'cloud-architecture'];
    const skillBonus = skills.filter(s => premiumSkills.includes(s)).length * 0.05;
    
    // Location multiplier
    const locationMultiplier = {
      'silicon-valley': 1.3,
      'new-york': 1.25,
      'san-francisco': 1.35,
      'seattle': 1.2,
      'remote': 1.0,
      'default': 1.0
    };
    
    const multiplier = locationMultiplier[location] || locationMultiplier['default'];
    
    const totalSalary = Math.round(baseSalary * (1 + skillBonus) * multiplier);
    const negotiationRange = {
      min: Math.round(totalSalary * 0.9),
      expected: totalSalary,
      max: Math.round(totalSalary * 1.15)
    };
    
    res.json({
      role,
      yearsExperience,
      location,
      baseSalary,
      skillBonus: `${Math.round(skillBonus * 100)}%`,
      locationMultiplier: `${Math.round((multiplier - 1) * 100)}%`,
      negotiationRange,
      advice: 'Research your market value and be confident in your negotiation'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
