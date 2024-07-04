import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';

class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ userId: req.body.userid }, (err, user) => {
      if (!user) { console.log('invalid userid'); return res.sendStatus(403);  }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token });
      });
    });
  }

}

export default UserCtrl;
