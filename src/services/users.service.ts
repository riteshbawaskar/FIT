import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UsersService  {

  constructor(private httpClient: HttpClient) {

  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>('/api/user', user);
  }

  login(credentials: any): Observable<any> {
    return this.httpClient.post('/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }

  countUsers(): Observable<number> {
    return this.httpClient.get<number>('/api/users/count');
  }

  addUser(user: User): Observable<User> {
    console.log('Adding user:' + user.firstName);
    return this.httpClient.post<User>('/api/user', user);
  }

  getUser(user: User): Observable<User> {
    return this.httpClient.get<User>(`/api/user/${user._id}`);
  }

  editUser(user: User): Observable<any> {
    console.log(user._id + ',' + user.userId);
    return this.httpClient.put(`/api/user/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<any> {
    return this.httpClient.delete(`/api/user/${user._id}`, { responseType: 'text' });
  }

/*
  updateUser(user): Promise<any>
  {
      return new Promise((resolve, reject) => {
        console.log('post :' + user.toString());
        this._httpClient.post<User>('/api/user/' , user)
              .subscribe(response => {
                  this.getUsers();
                  resolve(response);
              });
      });
  }

  getUsers(): Promise<any>
  {
      return new Promise((resolve, reject) => {
              this._httpClient.get('/api/users')
                  .subscribe((response: any) => {

                      this.users = response;

                      if ( this.searchText && this.searchText !== '' )
                      {
                         // this.contacts = FuseUtils.filterArrayByString(this.contacts, this.searchText);
                      }

                      /* this.users = this.users.map(user => {
                          return new User(user);
                      }); */
/*
                      this.onUsersChanged.next(this.users);
                      resolve(this.users);
                      console.log('In get Users' + this.users.toString());
                  }, reject);
          }
      );
  }

*/
}
