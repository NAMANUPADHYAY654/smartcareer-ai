import express from 'express';

const router = express.Router();

// Learning path recommendations
const LEARNING_PATHS = {
  'web-development': {
    skills: ['html', 'css', 'javascript', 'react', 'node.js'],
    courses: [
      { name: 'React Fundamentals', duration: '8 weeks', difficulty: 'beginner' },
      { name: 'Advanced Node.js', duration: '6 weeks', difficulty: 'intermediate' },
      { name: 'Full Stack Development', duration: '12 weeks', difficulty: 'advanced' }
    ],
    timeline: 16,
    certifications: ['MERN Stack', 'Full Stack Developer']
  },
  'data-science': {
    skills: ['python', 'sql', 'machine-learning', 'statistics'],
    courses: [
      { name: 'Python for Data Science', duration: '6 weeks', difficulty: 'beginner' },
      { name: 'Machine Learning Algorithms', duration: '8 weeks', difficulty: 'intermediate' },
      { name: 'Deep Learning', duration: '10 weeks', difficulty: 'advanced' }
    ],
    timeline: 18,
    certifications: ['Data Science Professional', 'ML Engineer']
  },
  'devops': {
    skills: ['docker', 'kubernetes', 'ci-cd', 'terraform'],
    courses: [
      { name: 'Docker Essentials', duration: '4 weeks', difficulty: 'beginner' },
      { name: 'Kubernetes for Professionals', duration: '8 weeks', difficulty: 'intermediate' },
      { name: 'Infrastructure as Code', duration: '6 weeks', difficulty: 'advanced' }
    ],
    timeline: 16,
    certifications: ['CKA', 'Terraform Associate']
  }
};

// Get learning path
router.get('/:track', (req, res) => {
  try {
    const { track } = req.params;
    const path = LEARNING_PATHS[track];
    
    if (!path) {
      return res.status(404).json({ 
        error: `Learning path '${track}' not found. Available: ${Object.keys(LEARNING_PATHS).join(', ')}`
      });
    }
    
    res.json({
      track,
      ...path,
      message: `This learning path will take approximately ${path.timeline} weeks to complete`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all learning paths
router.get('/', (req, res) => {
  res.json({
    learningPaths: Object.keys(LEARNING_PATHS),
    description: 'Get specific learning path details by accessing /api/learning-path/:track'
  });
});

export default router;
