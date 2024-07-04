import * as mongoose from 'mongoose';

const componentlibSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true },
  description: String
});

const ComponentLib = mongoose.model('ComponentLib', componentlibSchema);

export default ComponentLib;

