abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = async (req, res) => {
    try {
      const docs = await this.model.findAll({});
      res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Count all
  count = async (req, res) => {
    try {
      const count = await this.model.count();
      res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Insert
  insert = async (req, res) => {
    try {
      console.log('received insert request : ' + JSON.stringify(req.body));
      const obj = await this.model.create(req.body);
      res.status(201).json(obj);
      console.log(req.body);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ error: err.message });
    }
  }

  // Get by id
  get = async (req, res) => {
    try {
      const obj = await this.model.findAll({where:{ _id: req.params.id }});
      console.log('get: ' + obj );
      res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // Update by id
  update = async (req, res) => {
    try {
      console.log('searching for' + req.params.id );
      console.log(req.body);
      await this.model.update(req.body, {where : { _id: req.params.id }});
      res.sendStatus(200);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ error: err.message });
    }
  }

  // Delete by id
  delete = async (req, res) => {
    try {
      await this.model.destroy({where :{ _id: req.params.id }});
      res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default BaseCtrl;
