import { EnvironmentConfig } from '../models/environment-config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigService {

  constructor(private httpClient: HttpClient) {}

  getEnvironmentConfigs(): Observable<EnvironmentConfig[]> {
    return this.httpClient.get<EnvironmentConfig[]>('/api/environmentConfigs');
  }

  countEnvironmentConfigs(): Observable<number> {
    return this.httpClient.get<number>('/api/environmentConfigs/count');
  }

  addEnvironmentConfig(environmentConfig: EnvironmentConfig): Observable<EnvironmentConfig> {
    return this.httpClient.post<EnvironmentConfig>('/api/environmentConfig', environmentConfig);
  }

  getEnvironmentConfig(environmentId: any): Observable<EnvironmentConfig> {
    return this.httpClient.get<EnvironmentConfig>(`/api/EnvironmentConfig/${environmentId}`);
  }

  editEnvironmentConfig(environmentConfig: EnvironmentConfig): Observable<any> {

    return this.httpClient.put(`/api/environmentConfig/${environmentConfig._id}`, environmentConfig, { responseType: 'text' });
  }

  deleteSuite(environmentConfig: EnvironmentConfig): Observable<any> {
    return this.httpClient.delete(`/api/EnvironmentConfig/${environmentConfig._id}`, { responseType: 'text' });
  }


}
