import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from './../../../services/users.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { fuseAnimations } from './../../../theme/animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private _formBuilder: FormBuilder, private userService: UsersService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void
  {
      this.registerForm = this._formBuilder.group({
          firstName           : ['', Validators.required],
          lastName           : ['', Validators.required],
          userId           : ['', Validators.required],
          email          : ['', [Validators.required, Validators.email]],
          password       : ['', Validators.required],
          passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
      });

      // Update the validity of the 'passwordConfirm' field
      // when the 'password' field changes
      this.registerForm.get('password').valueChanges
          .subscribe(() => {
              this.registerForm.get('passwordConfirm').updateValueAndValidity();
          });
  }

  Register(): void{
      this.userService.addUser(this.registerForm.getRawValue()).subscribe(resp => {
        this.matSnackBar.open('Account Created. Go to login page and login with the credentials.', 'OK', {
          verticalPosition: 'top',
          duration        : 2000
      });
      },
      error => {
        this.matSnackBar.open('User Add Error:' + error, 'OK', {
            verticalPosition: 'top',
            duration        : 2000
        });
        console.log(error);
      }
      );
  }
}
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {passwordsNotMatching: true};
};




