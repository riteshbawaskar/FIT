import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { MaterialModule } from './../../core/modules/material.module';
import { fuseAnimations } from './../../theme/animation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor(private auth: AuthService) { 
    this.user = auth.currentUser;
    console.log(JSON.stringify(this.user));
    }

  ngOnInit() {
  }

}
