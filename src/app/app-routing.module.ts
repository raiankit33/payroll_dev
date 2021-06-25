import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';



import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'signUp',component:SignupComponent
  },
  {
    path:'forget',component:ForgetpassComponent
  },
  {
    path:'Alogin',component:AdminLoginComponent
  },
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  
  


 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
