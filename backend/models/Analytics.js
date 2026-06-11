import mongoose from 'mongoose';

const AnalyticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventType: { type: String, enum: ['skill_gap_viewed', 'career_path_viewed', 'market_trend_viewed'] },
  eventData: mongoose.Schema.Types.Mixed,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Analytics', AnalyticsSchema);
