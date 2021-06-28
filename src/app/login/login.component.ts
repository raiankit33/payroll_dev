import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService} from  '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  isLoading :boolean=false
  constructor(private router: Router,
    // private toastr: ToastrService,
    private service : AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

  }



  form = new FormGroup({
   
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  })

  // onSubmit(){
  //    if(this.form.value.email == 'admin@gmail.com' && this.form.value.password == '12345'){
      
  //     this.router.navigate(['dash/dashboad']);
  //    }else{
  //      console.log('fail to log ')
  //    }

  //     }
    



      onSubmit(){
 
    if(this.form.valid){
this.isLoading = true
      let login ={
        email: this.form.value.email,
        password: this.form.value.password,
        role : 'user'
      }
    this.service.authenticateUser(login)
      .subscribe(
        (data) => {
          if(data.statusCode==200){
            // localStorage.setItem('AuthToken', data.token);
            this.service.storeUserData(data.token, data.user);
            // this.toastr.success('Success ! logged In');
            if(data.user.data == true){
              this.isLoading =false
              console.log('success')
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logged In',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(['dash/dashboad1']);
            }else{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logged In',
                showConfirmButton: false,
                timer: 1500
              })
              console.log('success')
              this.router.navigate(['dash/dashboad']);
            }
            // console.log('success')
            // this.router.navigate(['dash/dashboad']);
        
          } else {
            console.log('error');
            alert('Oops ! Failed to logged In')
            // this.toastr.error('Oops','Failed to logged In');
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.log(error);


        }
      );
  }
}
    
}
