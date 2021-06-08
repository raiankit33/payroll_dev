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
import { BatchesComponent } from './batches/batches.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [DashComponent, DashboadComponent, FormComponent, Dashboad1Component, SettingComponent, BatchesComponent,
     
     ],
  imports: [

    CommonModule,
    DashRoutingModule,
    Ng2SearchPipeModule,
    NgxCsvParserModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    SelectDropDownModule
   

  ],
  providers: [AllserviceService],
})
export class DashModule { }
