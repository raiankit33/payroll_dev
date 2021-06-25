import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  siteKey:string = "6LfIOlYbAAAAAOSWpT_3p8j8THR_Am5S0iLQ1kgV"

  constructor(private router: Router,
    private service : AuthService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
   
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    recaptcha: new FormControl('',Validators.required),
  })



  onSubmit(){
  
    if(this.form.valid){
      let s ={
        name :this.form.value.name,
        email :this.form.value.email,
        password :this.form.value.password,
        recaptcha :this.form.value.recaptcha,
        status :"Inactive"
      }
    this.service.SignUp(s)
      .subscribe(
        (data) => {
          if(data.statusCode==200){
            // localStorage.setItem('AuthToken', data.token);
            this.service.storeUserData(data.token, data.user);
            // this.toastr.success('Success ! logged In');
            console.log('success')
            this.router.navigate(['/']);
        
          } else {
            console.log('error');
            alert('error')
            // this.toastr.error('Oops','Failed to logged In');
            this.router.navigate(['signUp']);
          }
        },
        (error) => {
          console.log(error);


        }
      );
  }
}
}
