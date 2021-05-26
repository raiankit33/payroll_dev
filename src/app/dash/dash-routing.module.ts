import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecomdationComponent } from '../recomdation/recomdation.component';
import { BatchesComponent } from './batches/batches.component';

import { DashComponent } from './dash.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { Dashboad1Component } from './dashboad1/dashboad1.component';
import { FormComponent } from './form/form.component';
import { SettingComponent } from './setting/setting.component';
import { RecomComponent } from './recom/recom.component';

const routes: Routes = [
  { path: '', component: DashComponent,
  children:[
    { path: 'dashboad', component:DashboadComponent},
    { path: 'dashboad1', component:Dashboad1Component},
    { path: 'form', component:FormComponent},
    { path: 'setting', component:SettingComponent},
   
    { path: 'batch', component:BatchesComponent},
    { path: 'recom', component:RecomComponent},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
