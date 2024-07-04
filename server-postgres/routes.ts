import * as express from 'express';
import UserCtrl from './controllers/user.controller';
import ProjectCtrl from './controllers/project.controller';

var userCtrl = new UserCtrl();
var projectCtrl = new ProjectCtrl();

function setRoutes(app): void {
    const router = express.Router();

    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);

       // Project
  router.route('/projects').get(projectCtrl.getAll);
  router.route('/project/count').get(projectCtrl.count);
  router.route('/project').post(projectCtrl.insert);
  router.route('/project/:id').get(projectCtrl.get);
  router.route('/project/:id').put(projectCtrl.update);
  router.route('/project/:id').delete(projectCtrl.delete);
 // Apply the routes to our application with the prefix /api
 app.use('/api', router);

}

export default setRoutes;