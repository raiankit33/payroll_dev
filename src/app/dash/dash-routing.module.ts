import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchesComponent } from './batches/batches.component';

import { DashComponent } from './dash.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { Dashboad1Component } from './dashboad1/dashboad1.component';
import { FormComponent } from './form/form.component';
import { SettingComponent } from './setting/setting.component';
import { RecomComponent } from './recom/recom.component';
import { ListComponent } from './list/list.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: DashComponent,
  children:[
    { path: 'dashboad', component:DashboadComponent},
    { path: 'dashboad1', component:Dashboad1Component},
    { path: 'form', component:FormComponent},
    { path: 'setting', component:SettingComponent},
    { path: 'list', component:ListComponent},
    { path: 'batch', component:BatchesComponent},
    { path: 'recom', component:RecomComponent},
    { path: 'employeeList', component:EmployeeListComponent},
    { path: 'employeeDetails', component:EmployeeDetailsComponent},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
