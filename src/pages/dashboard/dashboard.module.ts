import { AuthService } from './../../services/auth.service';
import { ExecutionService } from './../../services/execution.service';
import { TestsuiteService } from './../../services/testsuite.service';
import { TestcaseService } from './../../services/testcase.service';
import { TeststepService } from './../../services/teststep.service';
import { SharedModule } from '../../core/modules/shared.module';
import { MaterialModule } from './../../core/modules/material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    MatIconModule
  ],
  declarations: [DashboardComponent],
  providers: [TeststepService, TestcaseService, TestsuiteService, ExecutionService, AuthService]
})
export class DashboardModule { }
