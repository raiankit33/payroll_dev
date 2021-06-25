import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchesComponent } from './batches/batches.component';

import { DashComponent } from './dash.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { Dashboad1Component } from './dashboad1/dashboad1.component';
import { FormComponent } from './form/form.component';
import { SettingComponent } from './setting/setting.component';


import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { AdmindashComponent } from '../admin/admindash/admindash.component';
import { AdminSettingComponent } from '../admin/admin-setting/admin-setting.component';

const routes: Routes = [
  { path: '', component: DashComponent,
  children:[
    { path: 'dashboad', component:DashboadComponent},

    { path: 'dashboad1', component:Dashboad1Component},
    { path: 'AdminDashboad', component:AdmindashComponent},
    { path: 'form', component:FormComponent},
    { path: 'setting', component:SettingComponent},
    { path: 'AdminSetting', component:AdminSettingComponent},
    
    { path: 'batch', component:BatchesComponent},
 
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
