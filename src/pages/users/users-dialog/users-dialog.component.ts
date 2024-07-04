import { DraggableDialogDirective } from '../../../core/directives/draggable-dialog/DraggableDialog.directive';
import { FlexPerfectScrollbarDirective } from './../../../core/directives/flex-perfect-scrollbar/flex-perfect-scrollbar.directive';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../../core/modules/material.module';
import { SharedModule } from './../../../core/modules/shared.module';
import { User } from './../../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrl: './users-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UsersDialogComponent implements OnInit {

  action: string;
  user: User;
  userForm: FormGroup;
  dialogTitle: string;

  constructor( public matDialogRef: MatDialogRef<UsersDialogComponent>,
               @Inject(MAT_DIALOG_DATA) private _data: any,
               private _formBuilder: FormBuilder) {

      // Set the defaults
      this.action = _data.action;

      if ( this.action === 'edit' )
      {
          this.dialogTitle = 'Edit User';
          this.user = _data.user;
      }
      else
      {
          this.dialogTitle = 'New User';
          this.user = new User();
      }

      this.userForm = this.createUserForm();
    }

    createUserForm(): FormGroup
    {
        return this._formBuilder.group({
            _id : [this.user._id],
            firstName: [this.user.firstName],
            lastName: [this.user.lastName],
            userId: [this.user.userId],
            password : [this.user.password],
            email   : [this.user.email],
            active: [this.user.active]
        });
    }

  ngOnInit() {
  }

}
