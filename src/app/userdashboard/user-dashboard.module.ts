import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DocTableComponent } from './doc-table/doc-table.component';
import { MySettingComponent } from './my-setting/my-setting.component';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';

const components = [
  DashboardComponent,
  DashboardHeaderComponent,
  DocTableComponent,
  MySettingComponent,
  CompanyDashboardComponent
]

@NgModule({
  declarations: [
    ...components,
   
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class UserDashboardModule { }
