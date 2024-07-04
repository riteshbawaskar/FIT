import Project, { ProjectMap } from '../models/project.model';
import database from '../database';
import BaseCtrl from './base';


class ProjectCtrl  extends BaseCtrl{
  model = Project;

  constructor(){
    super();
    ProjectMap(database);
  }
}

export default ProjectCtrl;
