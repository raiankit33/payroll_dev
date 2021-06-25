import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AllserviceService } from '../service/allservice.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(
    private router: Router,
    private Service: AllserviceService,
  ) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    email: new FormControl(''),


})


forgetPass(){
 let hh ={
   email : this.form.value.email
 }
  this.Service.forgetPassword(hh).subscribe((res:any) =>{
 if(res.statusCode == 200){

  Swal.fire({
  
    icon: 'success',
    title: 'Password send successfully',
    showConfirmButton: false,
    timer: 3000
  })
 }else{
  Swal.fire({
  
   
    title: 'Wrong Email ',
    showConfirmButton: false,
    timer: 3000
  })
 }
  })
}

}
