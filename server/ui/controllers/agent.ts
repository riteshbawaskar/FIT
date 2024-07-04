import Agent from '../models/agent';
import BaseCtrl from './base';


class AgentCtrl extends BaseCtrl {
  model = Agent;

  AddOrUpdate = async (req, res) => {
    try {
      // Find and replace collections add if new and udpdate if exist
      const obj = await this.model.replaceOne({ name: req.body.name }, req.body, {upsert: true});
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

}

export default AgentCtrl;
