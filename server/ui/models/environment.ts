import * as mongoose from 'mongoose';


const environmentSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true },
  description: String,
});

const Environment = mongoose.model('Environment', environmentSchema);

export default Environment;

