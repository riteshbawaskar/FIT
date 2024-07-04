import * as mongoose from 'mongoose';
const counter = require('./counter');


const suiteSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  group: String,
  projectid: String,
});

suiteSchema.pre('save', function(next) {
  var doc = this;
  if (this.isNew) {
  counter.findByIdAndUpdate({_id: 'Suite'}, {$inc: { seq: 1} }, {new: true, upsert: true},
    function(error, counter)   {
      if(error)
      {
          return next(error);
      }
      doc._id = counter.seq;
      next();
  });
}
});

const Suite = mongoose.model('Suite', suiteSchema);
export default Suite;
