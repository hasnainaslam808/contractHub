import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SecurityComponent } from './security/security.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './login/login.component';
import { CreateCompanyAcountComponent } from './create-company-acount/create-company-acount.component';
import { CompleteUserAcountComponent } from './complete-user-acount/complete-user-acount.component';

import { UserDashboardModule } from './userdashboard/user-dashboard.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceInterInterceptor } from './services/service-inter.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import * as pdfjsLib from 'pdfjs-dist';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactUsComponent,
        SecurityComponent,
        LoginComponent,
        CreateCompanyAcountComponent,
        CompleteUserAcountComponent,
        GetStartedComponent,
        ResetPasswordComponent,
        OtpVerificationComponent,
        

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NoopAnimationsModule,
        FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
        UserDashboardModule,
        HttpClientModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added here
        
    ],
    providers: [  {
        provide: HTTP_INTERCEPTORS,
        useClass: ServiceInterInterceptor,
        multi: true
      }],
    bootstrap: [AppComponent]
  
})
export class AppModule { }
