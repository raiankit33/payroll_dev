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


@NgModule({
  declarations: [
    AppComponent,
   
  
    LoginComponent,
   
    EmployeeListComponent,
    EmployeeDetailsComponent,
    
  
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
   
  ],
  providers: [SharedData],
  bootstrap: [AppComponent]
})
export class AppModule { }
