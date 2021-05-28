import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RecomdationComponent } from './recomdation/recomdation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    LoginComponent,
    RecomdationComponent,
    EmployeeListComponent,
   
  
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
