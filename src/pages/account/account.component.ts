import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { 
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
