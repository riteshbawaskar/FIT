import * as mongoose from 'mongoose';
const counter = require('./counter');

const stepSchema = new mongoose.Schema({
_id: String,
testcaseid: String,
seqid: String,
name: String,
action: String,
input: [{key: String, value: String}],
validation: [{key: String, value: String}],
tags: [String],
active: Boolean
});

stepSchema.pre('save', function(next) {
    let doc = this;
    if (this.isNew) {
    counter.findByIdAndUpdate({_id: 'TestStep'}, {$inc: { seq: 1} }, {new: true, upsert: true},
      function(error, counter)   {
        if (error)
        {
            return next(error);
        }
        doc._id = counter.seq;
        next();
    });
  }
  });

const TestStep = mongoose.model('TestStep', stepSchema);
export default TestStep;

