import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project = new Project();

setSelectedProject(project:Project): void
{
  this.selectedProject = project;
}

getSelectedProject(): Project{ return this.selectedProject; }

constructor(private httpClient: HttpClient) { }


getProjects(): Observable<Project[]> {
  return this.httpClient.get<Project[]>('/api/projects');
}

countProjects(): Observable<number> {
  return this.httpClient.get<number>('/api/project/count');
}

addProject(project: Project): Observable<Project> {
  return this.httpClient.post<Project>('/api/project', project);
}

getProject(project: Project): Observable<Project> {
  return this.httpClient.get<Project>(`/api/Project/${project._id}`);
}

editProject(project: Project): Observable<any> {

  return this.httpClient.put(`/api/Project/${project._id}`, project, { responseType: 'text' });
}

deleteProject(project: Project): Observable<any> {
  return this.httpClient.delete(`/api/Project/${project._id}`, { responseType: 'text' });
}

}
