import * as mongoose from 'mongoose';

async function setMongo(mongodbURI): Promise<any> {
//  let mongodbURI;
 // if (process.env.NODE_ENV === 'test') {
 //   mongodbURI = process.env.MONGODB_TEST_URI;
 // } else {
 //   mongodbURI = process.env.MONGODB_UI_URI;
 // }
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);
  // Connect to MongoDB using Mongoose
  await mongoose.connect(mongodbURI);
  console.log('Connected to MongoDB: '+ mongodbURI);
}

export default setMongo;
