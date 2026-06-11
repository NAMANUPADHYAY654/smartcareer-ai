import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resume: { type: String },
  skills: [String],
  experience: { type: Number, default: 0 },
  currentRole: String,
  targetRole: String,
  industry: String,
  location: String,
  skillGaps: [{ skill: String, priority: String }],
  recommendedCareers: [{ role: String, matchScore: Number }],
  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model('User', UserSchema);
