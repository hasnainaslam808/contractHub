import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CompleteUserAcountComponent } from './complete-user-acount/complete-user-acount.component';
import { CreateCompanyAcountComponent } from './create-company-acount/create-company-acount.component';
import { DashboardComponent } from './userdashboard/dashboard/dashboard.component';
import { MySettingComponent } from './userdashboard/my-setting/my-setting.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
 path:'',
 component:HomeComponent
  },
  {
    path:'security',
    component:SecurityComponent,
  },
  {
    path:'contact-us',
    component:ContactUsComponent,
  },
  {
    path:'login',
component:LoginComponent
  },
  {
    path:'user-account',
    component:CompleteUserAcountComponent
  },
  {
    path:'company-account',
    component:CreateCompanyAcountComponent
  },
  {
    path:'getStarted',
    component:GetStartedComponent
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import(`./userdashboard/user-dashboard.module`).then(
      module => module.UserDashboardModule
    )
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
