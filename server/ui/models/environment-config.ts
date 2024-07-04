import * as mongoose from 'mongoose';


const environmentConfigSchema = new mongoose.Schema({
  componentid: String,
  projectid: String,
  environmentid: String,
  config: [{key: String, value: String}],
});

const EnvironmentConfig = mongoose.model('EnvironmentConfig', environmentConfigSchema);

export default EnvironmentConfig;

