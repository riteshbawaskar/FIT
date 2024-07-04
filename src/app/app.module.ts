import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../core/modules/material.module';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RightmenuComponent } from './rightmenu/rightmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SharedModule } from '../core/modules/shared.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SidenavService } from '../services';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import {DashboardModule} from '../pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ToolbarComponent,
    RightmenuComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    DashboardModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string => localStorage.getItem('token') || "",
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [SidenavService,AuthService, UsersService,JwtHelperService , provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
