import { JwtHelperService } from '@auth0/angular-jwt';
import { UsersService } from './../../services/users.service';
import { AuthService } from './../../services/auth.service';
import { MaterialModule } from './../../core/modules/material.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountRoutes } from './account.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { SharedModule } from '../../core/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutes,
    SharedModule,
    MaterialModule,
  ],
  declarations: [AccountComponent, LoginComponent, RegisterComponent],
  providers: [AuthService, UsersService]
})
export class AccountModule { }
