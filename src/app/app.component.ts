import { Component , Inject} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SidenavService } from '../services';
import { onMainContentChange } from './animation/animation';
import { DOCUMENT } from '@angular/common';
import { Project } from '../models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [onMainContentChange]
})
export class AppComponent {
  title = 'FIT';

  name = 'Cherry';
  loggedin: string = "";
  projects: Project[] = [];

  public onSideNavChange: boolean | undefined;

  constructor(private sidenavService: SidenavService, @Inject(DOCUMENT) private document: any, public auth: AuthService) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });
    this.document.body.classList.add('theme-default');
  }
}
