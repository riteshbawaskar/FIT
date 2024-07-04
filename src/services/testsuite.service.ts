import { ProjectService } from './project.service';
import { TestSuite } from './../models/test-suite';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestsuiteService {

  constructor(private httpClient: HttpClient, private projectservice: ProjectService) {}

  getSuites(): Observable<TestSuite[]> {
    const projectId = this.projectservice.selectedProject._id;
    return this.httpClient.get<TestSuite[]>(`/api/suites/${projectId}`);
  }

  getAllSuites(): Observable<TestSuite[]> {
    return this.httpClient.get<TestSuite[]>('/api/suites');
  }

  countSuites(): Observable<number> {
    return this.httpClient.get<number>('/api/suite/count');
  }

  addSuites(testSuite: TestSuite): Observable<TestSuite> {
    return this.httpClient.post<TestSuite>('/api/suite', testSuite);
  }

  getSuite(testSuite: TestSuite): Observable<TestSuite> {
    return this.httpClient.get<TestSuite>(`/api/suite/${testSuite._id}`);
  }

  editSuite(testSuite: TestSuite): Observable<any> {

    return this.httpClient.put(`/api/suite/${testSuite._id}`, testSuite, { responseType: 'text' });
  }

  deleteSuite(testSuite: TestSuite): Observable<any> {
    return this.httpClient.delete(`/api/suite/${testSuite._id}`, { responseType: 'text' });
  }


}
