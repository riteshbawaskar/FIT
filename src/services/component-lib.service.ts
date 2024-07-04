import { ComponentLib } from './../models/component-lib';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ComponentLibService {

constructor(private httpClient: HttpClient) {}

getLibs(): Observable<ComponentLib[]> {
  return this.httpClient.get<ComponentLib[]>('/api/componentlibs');
}

countLibs(): Observable<number> {
  return this.httpClient.get<number>('/api/componentlib/count');
}

addLib(componentlib: ComponentLib): Observable<ComponentLib> {
  return this.httpClient.post<ComponentLib>('/api/componentlib', componentlib);
}

getLib(componentlib: ComponentLib): Observable<ComponentLib> {
  return this.httpClient.get<ComponentLib>(`/api/componentlib/${componentlib._id}`);
}

editLib(componentlib: ComponentLib): Observable<any> {

  return this.httpClient.put(`/api/componentlib/${componentlib._id}`, componentlib, { responseType: 'text' });
}

deleteLib(componentlib: ComponentLib): Observable<any> {
  return this.httpClient.delete(`/api/componentlib/${componentlib._id}`, { responseType: 'text' });
}


}
