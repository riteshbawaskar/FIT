import { TestStep } from '../models/test-step';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeststepService {

  constructor(private httpClient: HttpClient) {}

  getSteps(TestId): Observable<TestStep[]> {
    return this.httpClient.get<TestStep[]>(`/api/steps/${TestId}`);
  }

  getAllSteps(): Observable<TestStep[]> {
    return this.httpClient.get<TestStep[]>('/api/steps/');
  }

  addStep(testStep: TestStep): Observable<TestStep> {
    return this.httpClient.post<TestStep>('/api/step', testStep);
  }

  getStep(testStep: TestStep): Observable<TestStep> {
    return this.httpClient.get<TestStep>(`/api/step/${testStep._id}`);
  }

  editStep(testStep: TestStep): Observable<any> {

    return this.httpClient.put(`/api/step/${testStep._id}`, TestStep, { responseType: 'text' });
  }

  deleteStep(testStep: TestStep): Observable<any> {
    return this.httpClient.delete(`/api/step/${testStep._id}`, { responseType: 'text' });
  }


}
