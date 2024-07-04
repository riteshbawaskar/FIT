import User, { UserMap } from '../models/user.model';
import database from '../database';
import * as jwt from 'jsonwebtoken';
import BaseCtrl from './base';
import * as bcrypt from 'bcryptjs'


class UserCtrl  extends BaseCtrl{
  model = User;

  constructor(){
    super();
    UserMap(database);
  }

  login = async (req, res) => {
    const user = await this.model.findOne({where:{ userId: req.body.userid }});
    
    if (!user) { console.log('invalid userid'); return res.sendStatus(403);  }

     if(bcrypt.compareSync(req.body.password,user.password))
     {
      const token = jwt.sign({ user }, process.env['SECRET_TOKEN']); // , { expiresIn: 10 } seconds
      res.status(200).json({ token });
     }
     else{
      res.status(403).json("{ invalid credentials }" );
     }
      
    
  }
}

export default UserCtrl;
