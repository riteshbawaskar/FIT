import * as mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true },
  description: String,
  url: String,
  status: String,
  public: Boolean,
  userid : String
});

const Agent = mongoose.model('Agent', agentSchema);

export default Agent;

