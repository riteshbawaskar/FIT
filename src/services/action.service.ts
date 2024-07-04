import { Actions } from '../models/actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

constructor(private httpClient: HttpClient) { }


getActions(componentid): Observable<Actions[]> {
  return this.httpClient.get<Actions[]>(`/api/actions/${componentid}`);
}

getAllActions(): Observable<Actions[]> {
  return this.httpClient.get<Actions[]>('/api/actions');
}

countActions(): Observable<number> {
  return this.httpClient.get<number>('/api/actions/count');
}

addAction(actions: Actions): Observable<Actions> {
  return this.httpClient.post<Actions>('/api/action', actions);
}

getAction(actions: Actions): Observable<Actions> {
  return this.httpClient.get<Actions>(`/api/action/${actions._id}`);
}

editActions(actions: Actions): Observable<any> {
  return this.httpClient.put(`/api/action/${actions._id}`, actions, { responseType: 'text' });
}

deleteActions(actions: Actions): Observable<any> {
  return this.httpClient.delete(`/api/action/${actions._id}`, { responseType: 'text' });
}

}
