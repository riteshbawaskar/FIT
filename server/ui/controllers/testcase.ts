import TestCase from '../models/testcase';
import BaseCtrl from './base';


class TestCaseCtrl extends BaseCtrl {
  model = TestCase;

  getTestCases = async (req, res) => {
    try {
      const obj = await this.model.find({ testsuiteid: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

}

export default TestCaseCtrl;
