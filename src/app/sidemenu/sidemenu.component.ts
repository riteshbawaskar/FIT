import { menus } from './menu-items';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../animation/animation';
import { SidenavService } from '../../services';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SideMenuComponent implements OnInit {

  public sideNavState = false;
  public linkText = false;

  public pages =  menus;

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

}