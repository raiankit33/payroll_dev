import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';


import { LoginComponent } from './login/login.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {SharedData} from '../app/Shared/sharedData.service';
import { SignupComponent } from './signup/signup.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
   
  
    LoginComponent,
   
    EmployeeListComponent,
    EmployeeDetailsComponent,
    SignupComponent,
    ForgetpassComponent,
    AdmindashComponent,
    AdminLoginComponent,
    AdminSettingComponent,
    
  
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
   
   
  ],
  providers: [SharedData],
  bootstrap: [AppComponent]
})
export class AppModule { }
