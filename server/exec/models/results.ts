import * as mongoose from 'mongoose';

const resultsSchema = new mongoose.Schema({
  name: String,
  runid: String,
  testcaseid: String,
  suiteid: String,
  stepid: String,
  stepresult: [{status: String, type: String, message: String}],
  status: String,
  reasonOfFalure: String,
  comments: String,
});

const Results = mongoose.model('Results', resultsSchema);

export default Results;

