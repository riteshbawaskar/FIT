import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { MaterialModule } from './../../../core/modules/material.module';
import { fuseAnimations } from './../../../theme/animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor( private _formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void
  {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this._formBuilder.group({
          userid   : ['', [Validators.required]],
          password: ['', Validators.required]
      });
  }

  Login(): void {
    this.auth.login(this.loginForm.getRawValue());  }

}
