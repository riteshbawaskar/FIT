import * as mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
  executionid: String,
  testcaseid: String,
  data: [{key: String, value: String}]
  
});

const State = mongoose.model('State', stateSchema);

export default State;

