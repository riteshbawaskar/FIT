import * as mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true },
  description: String,
  active: Boolean,
  componentlib: [String],
  agents:[String]
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

