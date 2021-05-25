import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { FormComponent } from './form/form.component';
import { Dashboad1Component } from './dashboad1/dashboad1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SettingComponent } from './setting/setting.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AllserviceService }  from '../service/allservice.service'
import { NgxCsvParserModule } from 'ngx-csv-parser';
  

@NgModule({
  declarations: [DashComponent, DashboadComponent, FormComponent, Dashboad1Component, SettingComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    NgxCsvParserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
   

  ],
  providers: [AllserviceService],
})
export class DashModule { }
