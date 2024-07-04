import { Execution } from './../models/execution';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutionService {


constructor(private httpClient: HttpClient) { }


getExecutions(): Observable < Execution[] > {
  return this.httpClient.get<Execution[]>('/api/executions');
}

countExecutions(): Observable < number > {
  return this.httpClient.get<number>('/api/execution/count');
}

addExecution(execution: Execution): Observable < Execution > {
  console.log('in execution service' + execution);
  return this.httpClient.post<Execution>('/api/execution', execution);
}

getExecution(execution: Execution): Observable < Execution > {
  return this.httpClient.get<Execution>(`/api/execution/${execution._id}`);
}

editExecution(execution: Execution): Observable < any > {

  return this.httpClient.put(`/api/execution/${execution._id}`, execution, { responseType: 'text' });
}

deleteExecution(execution: Execution): Observable < any > {
  return this.httpClient.delete(`/api/execution/${execution._id}`, { responseType: 'text' });
}

}
