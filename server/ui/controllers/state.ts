import ComponentLib from '../models/componentlib';
import State from '../models/state';
import BaseCtrl from './base';


class StateCtrl extends BaseCtrl {
  model = State;

  getState = async (req, res) => {
    try {
      const obj = await this.model.find({ executionid: req.query.executionid, testcaseid: req.query.testcaseid });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default StateCtrl;
