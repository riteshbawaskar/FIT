import * as mongoose from 'mongoose';

const actionSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true },
  description: String,
  input: [{key: String, value: String}],
  output: [{key: String, value: String}],
  validation: [{key: String, value: String}],
  active: Boolean,
  componentid: String
});

const Actions = mongoose.model('Action', actionSchema);

export default Actions;

