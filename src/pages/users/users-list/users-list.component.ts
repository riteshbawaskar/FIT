import { FlexPerfectScrollbarDirective } from './../../../core/directives/flex-perfect-scrollbar/flex-perfect-scrollbar.directive';
import { UsersDialogComponent } from './../users-dialog/users-dialog.component';
import { fuseAnimations } from './../../../theme/animation';
import { User } from './../../../models/user';
import { ConfirmDialogComponent } from './../../../core/components/confirm-dialog/confirm-dialog.component';
import { UsersService } from './../../../services/users.service';
import { Component, OnDestroy, OnInit, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class UsersListComponent implements OnInit {

  @ViewChild('dialogContent', { static: false })
  dialogContent: TemplateRef<any>;
  @Input() userSearchValue;
  users: User[];
  displayedColumns = ['avatar','firstName', 'lastName', 'email', 'userId', 'buttons'];
  selectedUsers: any[];
  checkboxes: {};
  dialogRef: any;
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  public dataSource: any;

  constructor(public userService: UsersService, public matSnackBar: MatSnackBar, private _matDialog: MatDialog) {

  }

  ngOnInit() {
    this.getUsers();
  }

  ngOnChanges(){
    this.dataSource.filter = this.userSearchValue.trim();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        this.dataSource = new MatTableDataSource<User>(this.users);
        console.log(data);
      },
      error => console.log(error)
    );
    /*  this.userService.getUser(this.auth.currentUser).subscribe(
        data => this.user = data,
        error => console.log(error),
        () => this.isLoading = false
      );*/
  }

  editUser(user): void {
    console.log('edit-contact');
    this.dialogRef = this._matDialog.open(UsersDialogComponent, {
      panelClass: 'user-form-dialog',
      data: {
        user: user,
        action: 'edit'
      }
    });

    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (!response) {
          return;
        }
        const actionType: string = response[0];
        const formData: FormGroup = response[1];
        switch (actionType) {
          /**
           * Save
           */
          case 'save':
            this.userService.editUser(formData.getRawValue()).subscribe(
              res => {
                  this.matSnackBar.open('User updated:' + res, 'OK', {
                      verticalPosition: 'top',
                      duration        : 2000 });
                  },
                    error => console.log(error)
                );

            break;
          /**
           * Delete
           */
          case 'delete':
            this.deleteUser(user);

            break;
        }
      });
  }

  deleteUser(user: User): void {
    console.log(user);
    this.userService.deleteUser(user).subscribe(
      res => {
        this.matSnackBar.open('User deleted', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this.getUsers();
      }
    );

  }
  save(user: User): void {
    this.userService.editUser(user).subscribe(
      res => {
        this.matSnackBar.open('User saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this.getUsers();
      },
      error => console.log(error)
    );
  }
}

