import * as express from 'express';
import ResultsCtrl from './controllers/results';

function setRoutes(app): void {
  const router = express.Router();

  const resultsCtrl = new ResultsCtrl();

   // Results
  router.route('/results').get(resultsCtrl.getAll);
  router.route('/results/count').get(resultsCtrl.count);
  router.route('/results').post(resultsCtrl.insert);
  router.route('/results/:id').get(resultsCtrl.get);
  router.route('/results/:id').put(resultsCtrl.update);
  router.route('/results/:id').delete(resultsCtrl.delete);
 

  // Apply the routes to our application with the prefix /api
  app.use('/execution-api', router);

}

export default setRoutes;
