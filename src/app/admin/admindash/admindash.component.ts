import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  user: any;
  showDetail: any = [];
name:any
inactive : boolean =false;
active : boolean = true;
  signUpDetail: any = [];
  Detail =[];




  constructor(private router: Router,
    private Service: AllserviceService,
    private Auth : AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getDetail()
    // this.getSignUpDetail()
  }

  Myform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl('', Validators.required),
  })

  Search() {
    if (this.name == "") {
      this.getDetail();
    } else {
      this.showDetail = this.showDetail.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  getDetail(){
    let vv ={
      
        AuthToken:this.user.token  
    }
    this.Service.getAdminDetailPage(vv).subscribe((res:any)=>{
console.log(res)
 this.Detail = res.dic


 this.showDetail = this.Detail.filter(data => data.status == 'Active');

 this.signUpDetail = this.Detail.filter(data => data.status == 'Inactive' );
    })
  }



activate(){
  this.active = true,
  this.inactive =false
}


  Inactive(){
this.inactive = true;
this.active = false

  }

  submitUser(){
    if(this.Myform.valid){
      let s ={
        name :this.Myform.value.name,
        email :this.Myform.value.email,
        password :this.Myform.value.password,
        status :"Active"
      }
      this.Auth.SignUp(s).subscribe((data) => {
 this.getDetail();
 this.Myform.reset()
 if(data.statusCode == 200){
  Swal.fire(
    'User added successfully!',
    '',
    'success'
  )
 }
      })
  }

}

  deleteUser(){
    
  }

  ActivateUser(id){
    let a ={
      AuthToken: this.user.token,
      id : id,
      status:"Active"


    }
    this.Service.getActivateUser(a).subscribe((res:any)=>{
this.getDetail()
    })
  }


  InActivateUser(id){
    let a ={
      AuthToken: this.user.token,
      id : id,
      status:"Inactive"


    }
    this.Service.getActivateUser(a).subscribe((res:any)=>{
this.getDetail();
    })
  }
   getBatchDetail(event){
    console.log(event,"fff")
    this.router.navigate(['dash/bachList',{'batch':event}]);

 

}


}

