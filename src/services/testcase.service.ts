import { TestCase } from './../models/test-case';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestcaseService {

  constructor(private httpClient: HttpClient) {}

  getTests(SuiteId): Observable<TestCase[]> {
    return this.httpClient.get<TestCase[]>(`/api/tests/${SuiteId}`);
  }

  getAllTests(): Observable<TestCase[]> {
    return this.httpClient.get<TestCase[]>('/api/tests/');
  }

  addTest(testCase: TestCase): Observable<TestCase> {
    return this.httpClient.post<TestCase>('/api/test', testCase);
  }

  getTest(testCase: TestCase): Observable<TestCase> {
    return this.httpClient.get<TestCase>(`/api/test/${testCase._id}`);
  }

  editTest(testCase: TestCase): Observable<any> {

    return this.httpClient.put(`/api/test/${testCase._id}`, testCase, { responseType: 'text' });
  }

  deleteTest(testCase: TestCase): Observable<any> {
    return this.httpClient.delete(`/api/test/${testCase._id}`, { responseType: 'text' });
  }


}
