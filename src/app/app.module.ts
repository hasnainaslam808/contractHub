import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SecurityComponent } from './security/security.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './userdashboard/dashboard/dashboard.component';
import { DocTableComponent } from './userdashboard/doc-table/doc-table.component';
import { LoginComponent } from './login/login.component';
import { CreateCompanyAcountComponent } from './create-company-acount/create-company-acount.component';
import { CompleteUserAcountComponent } from './complete-user-acount/complete-user-acount.component';
import { MySettingComponent } from './userdashboard/my-setting/my-setting.component';
import { DashboardHeaderComponent } from './userdashboard/dashboard-header/dashboard-header.component';
import { UserDashboardModule } from './userdashboard/user-dashboard.module';


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
        GetStartedComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NoopAnimationsModule,
        FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
        UserDashboardModule
    ]
})
export class AppModule { }
