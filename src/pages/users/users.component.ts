import { FlexPerfectScrollbarDirective } from './../../core/directives/flex-perfect-scrollbar/flex-perfect-scrollbar.directive';
import { UsersService } from './../../services/users.service';
import { fuseAnimations } from './../../theme/animation';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class UsersComponent implements OnInit {

  dialogRef: any;
  hasSelectedContacts: boolean;
  searchInput: FormControl;

  constructor(private _matDialog: MatDialog, private userService: UsersService, public matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  newUser(): void
    {
        this.dialogRef = this._matDialog.open(UsersDialogComponent, {
            panelClass: 'user-form-dialog',
            data      : { action: 'new' }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }
                console.log(response.getRawValue());
                this.userService.addUser(response.getRawValue()).subscribe(
                    error => {
                        this.matSnackBar.open('User Add Error:' + error, 'OK', {
                            verticalPosition: 'top',
                            duration        : 2000
                        });
                        console.log(error);
                    }
                );
            });
    }
}
