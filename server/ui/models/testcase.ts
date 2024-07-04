import * as mongoose from 'mongoose';
const counter = require('./counter');

const testSchema = new mongoose.Schema({
_id: String,
name: String,
testsuiteid: String,
description: String,
tags: [String],
active: Boolean
});

testSchema.pre('save', function(next) {
    let doc = this;
    if (this.isNew) {
    counter.findByIdAndUpdate({_id: 'TestCase'}, {$inc: { seq: 1} }, {new: true, upsert: true},
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

const TestCase = mongoose.model('TestCase', testSchema);
export default TestCase;
