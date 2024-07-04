import Actions from '../models/actions';
import BaseCtrl from './base';


class ActionsCtrl extends BaseCtrl {
  model = Actions;

  getActions = async (req, res) => {
    try {
      const obj = await this.model.find({ componentid: req.params.id });
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default ActionsCtrl;
