import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from './users.service';
import { User } from '../models/user';
import { Component, ViewChild, afterNextRender } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor(private userService: UsersService,
              private router: Router,
              private jwtHelper: JwtHelperService,
              public matSnackBar: MatSnackBar) {
              afterNextRender(() => {
                   const token = localStorage.getItem('token');
                  if (token) {
                      const decodedUser = this.decodeUserFromToken(token);
                      this.setCurrentUser(decodedUser);
                  }
              });
    }
  

  login(emailAndPassword: any): void {
    this.userService.login(emailAndPassword).subscribe(
      res => {
        this.loggedIn = true;
        console.log('logging in..');
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        this.loggedIn = true;
        this.router.navigate(['/dashboard']);
      },
      error => {console.log('invalid email or password!');
                this.matSnackBar.open('Invalid Email or Password:', 'OK', {
                verticalPosition: 'top',
                duration: 2000 });
      }
    );
  }

  logout(): void {
    console.log('logout');
    window.localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/account/login']);
  }

  decodeUserFromToken(token: string): object {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser: any): void {
    this.loggedIn = true;
    this.currentUser._id = decodedUser._id;
    this.currentUser.userId = decodedUser.userId;
    // this.currentUser.role = decodedUser.role;
    // this.isAdmin = decodedUser.role === 'admin';
    // delete decodedUser.role;
  }

}
