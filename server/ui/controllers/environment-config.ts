import EnvironmentConfig from '../models/environment-config';
import BaseCtrl from './base';


class EnvironmentConfigCtrl extends BaseCtrl {
  model = EnvironmentConfig;

  getEnvironmentConfig = async (req, res) => {
    try {
      const obj = await this.model.findOne({ environmentid: req.params.id });
      console.log('env :' + obj);
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default EnvironmentConfigCtrl;
