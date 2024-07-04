import Suite from '../models/suite';
import BaseCtrl from './base';



class SuiteCtrl extends BaseCtrl {
  model = Suite;

  getTestSuites = async (req, res) => {
    try {
      const obj = await this.model.find({ projectid: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

}

export default SuiteCtrl;
