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
pending : boolean =false
  signUpDetail: any = [];
  Detail =[];
  penDetail: any[];

  isSpinner :boolean = false;


  constructor(private router: Router,
    private Service: AllserviceService,
    private Auth : AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getDetail()
    // this.getSignUpDetail()

    this.isSpinner =true ;

    
    setTimeout(() => {
      this.isSpinner = false
      }, 3000);

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
    this.isSpinner =true
    let vv ={
      
        AuthToken:this.user.token  
    }
    this.Service.getAdminDetailPage(vv).subscribe((res:any)=>{
console.log(res)
 this.Detail = res.dic
this.isSpinner =false

 this.showDetail = this.Detail.filter(data => data.status == 'Active');

 this.signUpDetail = this.Detail.filter(data => data.status == 'Inactive' );

 this.penDetail = this.Detail.filter(data => data.status == 'Pending' );
    })
  }



activate(){

  this.active = true,
  this.inactive =false
  this.pending = false
}


  Inactive(){
this.inactive = true;
this.active = false
this.pending =false
  }

  pendingU(){
    this.pending =true
    this.inactive = false;
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

//   ActivateUser(id){
//     let a ={
//       AuthToken: this.user.token,
//       id : id,
//       status:"Active"


//     }
//     this.Service.getActivateUser(a).subscribe((res:any)=>{
// this.getDetail()
//     })
//   }

  ActivateUser(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Activate!'
    }).then((result) => {
      if (result.isConfirmed) {
        let a ={
          AuthToken: this.user.token,
          id : id,
          status:"Active"
    
    
        }
        this.Service.getActivateUser(a).subscribe((res:any)=>{
          this.getDetail();

          Swal.fire(
            'Active!',
            
            'success'
          )

        });

      }
    })
  }

 


  InActivateUser(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Inactive!'
    }).then((result) => {
      if (result.isConfirmed) {
        let a ={
          AuthToken: this.user.token,
          id : id,
          status:"Inactive"
    
    
        }
        this.Service.getActivateUser(a).subscribe((res:any)=>{
          this.getDetail();

          Swal.fire(
            'Inactive!',
            
            'success'
          )

        });

      }
    })
  }



   getBatchDetail(event){
    console.log(event,"fff")
    this.router.navigate(['dash/bachList',{'batch':event}]);

 

}


}

