import TestStep from '../models/teststep';
import BaseCtrl from './base';


class TestStepCtrl extends BaseCtrl {
  model = TestStep;

  getTestSteps = async (req, res) => {
    try {
      const obj = await this.model.find({ testcaseid: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

}

export default TestStepCtrl;
