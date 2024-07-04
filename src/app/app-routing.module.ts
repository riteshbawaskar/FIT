import { NgModule } from '@angular/core';
import { AuthGuard } from './../core/utils/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UsersModule } from './../pages/users/users.module';
import { UsersComponent } from './../pages/users/users.component';
//import { ProjectComponent } from './../pages/project/project.component';

const usersModule = () =>
  import('../pages/users/users.module').then((x) => x.UsersModule);
/*const designModule = () =>
  import('../pages/design/design.module').then((x) => x.DesignModule);
const componentModule = () =>
  import('../pages/component-lib/component-lib.module').then((x) => x.ComponentLibModule);
const executionModule = () =>
  import('../pages/execution/execution.module').then((x) => x.ExecutionModule);*/
const accountModule = () =>
  import('../pages/account/account.module').then((x) => x.AccountModule);

const routes: Routes = [{ path: '', component: DashboardComponent, canActivate: [AuthGuard]},
                        { path: 'users', loadChildren: usersModule},
                      //  { path: 'design', loadChildren: designModule},
                        {path: 'dashboard', component: DashboardComponent},
                      //  {path: 'components', loadChildren: componentModule},
                      //  {path: 'projects', component: ProjectComponent},
                      //  {path: 'execution', loadChildren: executionModule},
                        { path: 'account', loadChildren: accountModule}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
