import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the scoreboard.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  points: {
    type: Number,
    required: [true, 'Please provide a score number.'],
  },
});

export default mongoose.models.Score || mongoose.model('Score', ScoreSchema);
