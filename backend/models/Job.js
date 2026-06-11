import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
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
});

export default mongoose.model('Job', JobSchema);
