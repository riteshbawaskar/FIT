import * as express from 'express';

import UserCtrl from './controllers/user';
import ComponentLibCtrl from './controllers/componentlib';
import ProjectCtrl from './controllers/project';
import SuiteCtrl from './controllers/suite';
import TestCaseCtrl from './controllers/testcase';
import ExecutionCtrl from './controllers/execution';
import TestStepCtrl from './controllers/teststeps';
import ActionsCtrl from './controllers/actions';
import EnvironmentCtrl from './controllers/environment';
import EnvironmentConfigCtrl from './controllers/environment-config';
import StateCtrl from './controllers/state';
import AgentCtrl from './controllers/agent';


function setRoutes(app): void {
  const router = express.Router();

  const userCtrl = new UserCtrl();
  const componentlibCtrl = new ComponentLibCtrl();
  const projectCtrl = new ProjectCtrl();
  const suiteCtrl = new SuiteCtrl();
  const testCtrl = new TestCaseCtrl();
  const stepCtrl = new TestStepCtrl();
  const executionCtrl = new ExecutionCtrl();
  const actionsCtrl = new ActionsCtrl();
  const envCtrl = new EnvironmentCtrl();
  const envConfigCtrl = new EnvironmentConfigCtrl();
  const stateCtrl = new StateCtrl();
  const agentCtrl = new AgentCtrl();


  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

   // ComponentLib
  router.route('/componentlibs').get(componentlibCtrl.getAll);
  router.route('/componentlibs/count').get(componentlibCtrl.count);
  router.route('/componentlib').post(componentlibCtrl.insert);
  router.route('/componentlib/:id').get(componentlibCtrl.get);
  router.route('/componentlib/:id').put(componentlibCtrl.update);
  router.route('/componentlib/:id').delete(componentlibCtrl.delete);

   // Project
  router.route('/projects').get(projectCtrl.getAll);
  router.route('/project/count').get(projectCtrl.count);
  router.route('/project').post(projectCtrl.insert);
  router.route('/project/:id').get(projectCtrl.get);
  router.route('/project/:id').put(projectCtrl.update);
  router.route('/project/:id').delete(projectCtrl.delete);

   // Suites getTestSuites
  router.route('/suites').get(suiteCtrl.getAll);
  router.route('/suites/:id').get(suiteCtrl.getTestSuites);
  router.route('/suite/count').get(suiteCtrl.count);
  router.route('/suite').post(suiteCtrl.insert);
  router.route('/suite/:id').get(suiteCtrl.get);
  router.route('/suite/:id').put(suiteCtrl.update);
  router.route('/suite/:id').delete(suiteCtrl.delete);

    // TestCases
  router.route('/tests/').get(testCtrl.getAll);
  router.route('/tests/:id').get(testCtrl.getTestCases);
  router.route('/test/count').get(testCtrl.count);
  router.route('/test').post(testCtrl.insert);
  router.route('/test/:id').get(testCtrl.get);
  router.route('/test/:id').put(testCtrl.update);
  router.route('/test/:id').delete(testCtrl.delete);

    // TestSteps
  router.route('/steps/').get(stepCtrl.getAll);
  router.route('/steps/:id').get(stepCtrl.getTestSteps);
  router.route('/steps/count').get(stepCtrl.count);
  router.route('/step').post(stepCtrl.insert);
  router.route('/step/:id').get(stepCtrl.get);
  router.route('/step/:id').put(stepCtrl.update);
  router.route('/step/:id').delete(stepCtrl.delete);

  // Executions
  router.route('/executions').get(executionCtrl.getAll);
  router.route('/executions/count').get(executionCtrl.count);
  router.route('/execution').post(executionCtrl.insert);
  router.route('/execution/:id').get(executionCtrl.get);
  router.route('/execution/:id').put(executionCtrl.update);
  router.route('/execution/:id').delete(executionCtrl.delete);



  // Actions
  router.route('/actions').get(actionsCtrl.getAll);
  router.route('/actions/:id').get(actionsCtrl.getActions);
  router.route('/actions/count').get(actionsCtrl.count);
  router.route('/action').post(actionsCtrl.insert);
  router.route('/action/:id').get(actionsCtrl.get);
  router.route('/action/:id').put(actionsCtrl.update);
  router.route('/action/:id').delete(actionsCtrl.delete);

  // Environments
  router.route('/environments').get(envCtrl.getAll);
  router.route('/environments/count').get(envCtrl.count);
  router.route('/environment').post(envCtrl.insert);
  router.route('/environment/:id').get(envCtrl.get);
  router.route('/environment/:id').put(envCtrl.update);
  router.route('/environment/:id').delete(envCtrl.delete);

  // Environment-Configs
  router.route('/environmentConfigs').get(envConfigCtrl.getAll);
  router.route('/environmentConfigs/count').get(envConfigCtrl.count);
  router.route('/environmentConfig').post(envConfigCtrl.insert);
  router.route('/environmentConfig/:id').get(envConfigCtrl.getEnvironmentConfig);
  router.route('/environmentConfig/:id').put(envConfigCtrl.update);
  router.route('/environmentConfig/:id').delete(envConfigCtrl.delete);

  // STATE
  router.route('/state').get(stateCtrl.getState);
  router.route('/state/count').get(stateCtrl.count);
  router.route('/state').post(stateCtrl.insert);
  router.route('/state/:id').get(stateCtrl.get);
  router.route('/state/:id').put(stateCtrl.update);
  router.route('/state/:id').delete(stateCtrl.delete);

  // Agent
  router.route('/agents').get(agentCtrl.getAll);
  router.route('/agents/count').get(agentCtrl.count);
  router.route('/agent').post(agentCtrl.AddOrUpdate);
  router.route('/agent/:id').get(agentCtrl.get);
  router.route('/agent/:id').put(agentCtrl.update);
  router.route('/agent/:id').delete(agentCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
