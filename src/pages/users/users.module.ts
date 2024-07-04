
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutes } from './users.routing';
import { MaterialModule } from './../../core/modules/material.module';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { SharedModule } from './../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    UsersRoutes,
    HttpClientModule,
  ],
  declarations: [UsersComponent, UsersDialogComponent, UsersListComponent],
  providers: [UsersService]
})
export class UsersModule { }
