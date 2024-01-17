import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MySettingComponent } from './my-setting/my-setting.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'my-setting',
    component: MySettingComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'company-dashboard',
    component: CompanyDashboardComponent,
    canActivate:[AuthguardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
