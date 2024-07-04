import * as mongoose from 'mongoose';
import Agent from '../models/agent';
import ClientService from '../helper/ClientService';
const counter = require('./counter');

const clientService = new ClientService();

const executionSchema = new mongoose.Schema({
  _id: String,
  runid: String,
  name: String,
  tag: [String],
  agent: String,
  suiteid: String,
  projectid: String,
  schedule: String, //once , daily , weekkly , monthly
  date: Date,
  testcasefilter: [String],
  teststepfilter: [String],
  continueprevexecution: Boolean,
  option: String, // All , Failed
  runby: String,
  total: Number,
  pass: Number,
  fail: Number,
  status: String //scheduled, running, completed
});

executionSchema.pre('save', function (next) {
  var doc = this;
  if (this.isNew) {
    counter.findByIdAndUpdate({ _id: 'Execution' }, { $inc: { seq: 1 } }, { new: true, upsert: true },
      function (error, counter) {
        if (error) {
          return next(error);
        }
        doc._id = counter.seq;
        next();
      });
  }
});

executionSchema.post('save', function (next) {
  try {
    console.log('req - ' + this.isNew);
    if (this.isNew) {
      const obj = Agent.findOne({ name: this.agent });
      console.log('agent url :' + obj.url);
      clientService.postExecutionRequest(obj.url, this);
      next();
    }
  } catch (err) {
    console.log(err);
  }
});

const Execution = mongoose.model('Execution', executionSchema);
export default Execution;
