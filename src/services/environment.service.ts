import { Environment } from '../models/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private httpClient: HttpClient) {}

  getEnvironments(): Observable<Environment[]> {
    return this.httpClient.get<Environment[]>('/api/environments');
  }

  countEnvironment(): Observable<number> {
    return this.httpClient.get<number>('/api/environments/count');
  }

  addEnvironment(environment: Environment): Observable<Environment> {
    return this.httpClient.post<Environment>('/api/environment', environment);
  }

  getEnvironment(environment: Environment): Observable<Environment> {
    return this.httpClient.get<Environment>(`/api/environment/${environment._id}`);
  }

  editEnvironment(environment: Environment): Observable<any> {

    return this.httpClient.put(`/api/environment/${environment._id}`, environment, { responseType: 'text' });
  }

  deleteSuite(environment: Environment): Observable<any> {
    return this.httpClient.delete(`/api/environment/${environment._id}`, { responseType: 'text' });
  }


}
