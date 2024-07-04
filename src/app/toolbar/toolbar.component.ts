import { ProjectService } from './../../services/project.service';
import { AuthService } from './../../services/auth.service';
import { Project } from './../../models/project';

import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
@Input() sidenav: MatSidenav | undefined;
@Input() rightsidemenu: MatSidenav | undefined;
@Input() projects: Project[] = [{
  _id: '1',
  name: 'G20-Rates',
  active: true,
  description: 'This is rates test project',
  components: [],
}];

showLoadingBar: boolean | undefined;

selectedproject: Project | undefined;

  constructor(private router: Router, public auth: AuthService, public projectservice: ProjectService) {

    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.showLoadingBar = true;
        }
        if (event instanceof NavigationEnd) {
          this.showLoadingBar = false;
        }
      });

    projectservice.getProjects().subscribe(resp => {
          this.projects = resp;
          this.selectedproject = this.projects[0];
          projectservice.selectedProject = this.projects[0];
    });
   }

selectedMenu(project:Project): void
{
  this.selectedproject = project;
  this.projectservice.setSelectedProject(project);
}

  ngOnInit(): void {
   // this.selectedproject = this.projects[0];
  }

  Logout(): void {
    this.auth.logout();
  }

}
