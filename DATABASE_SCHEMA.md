# Database Schema Documentation

## User Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  resume: String,
  skills: [String],
  experience: Number,
  currentRole: String,
  targetRole: String,
  industry: String,
  location: String,
  skillGaps: [{ skill: String, priority: String }],
  recommendedCareers: [{ role: String, matchScore: Number }],
  createdAt: Date,
  updatedAt: Date
}
```

## Job Schema
```javascript
{
  _id: ObjectId,
  title: String,
  company: String,
  location: String,
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  description: String,
  requiredSkills: [String],
  experienceLevel: String,
  industry: String,
  postedDate: Date,
  source: String,
  url: String
}
```

## Analytics Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  eventType: String (enum: 'skill_gap_viewed', 'career_path_viewed', etc.),
  eventData: Object,
  timestamp: Date
}
```

## Indexes
- User: email (unique), createdAt
- Job: title, location, industry, postedDate
- Analytics: userId, timestamp, eventType
