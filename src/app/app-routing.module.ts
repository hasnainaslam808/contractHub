import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CompleteUserAcountComponent } from './complete-user-acount/complete-user-acount.component';
import { CreateCompanyAcountComponent } from './create-company-acount/create-company-acount.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthguardGuard } from './authguard.guard';
import { ChildernGuard } from './services/childern.guard';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home-page',
    component:HomeComponent
  },
  {
    path: 'security',
    component: SecurityComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'user-account',
    component: CompleteUserAcountComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'company-account',
    component: CreateCompanyAcountComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'getStarted',
    component: GetStartedComponent
  },
  {
    path:'verify/:token',
    component:OtpVerificationComponent
  },
  {
    path:'verify-reset-link/:token',
    component:OtpVerificationComponent
  },
  {
    path: 'user-dashboard', canActivateChild:[ChildernGuard],
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
