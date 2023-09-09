import mongoose, { Schema } from 'mongoose';

const campaignSchema = new Schema({
  title: String,
  description: String,
  targetGroup: String,
});

export default mongoose.model('Campaign', campaignSchema);