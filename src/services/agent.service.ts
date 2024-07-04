import { Agent } from '../models/agent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

constructor(private httpClient: HttpClient) { }



getAgents(): Observable<Agent[]> {
  return this.httpClient.get<Agent[]>('/api/agents');
}

countAgent(): Observable<number> {
  return this.httpClient.get<number>('/api/agent/count');
}

addAgent(agent: Agent): Observable<Agent> {
  return this.httpClient.post<Agent>('/api/agent', agent);
}

getAgent(agent: Agent): Observable<Agent> {
  return this.httpClient.get<Agent>(`/api/agent/${agent._id}`);
}

editAgent(agent: Agent): Observable<any> {
  return this.httpClient.put(`/api/agent/${agent._id}`, Agent, { responseType: 'text' });
}

deleteAgent(agent: Agent): Observable<any> {
  return this.httpClient.delete(`/api/agent/${agent._id}`, { responseType: 'text' });
}

}
