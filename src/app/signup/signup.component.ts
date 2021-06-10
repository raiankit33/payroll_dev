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

  constructor(private router: Router,
    private service : AuthService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
   
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })



  onSubmit(){
  
    if(this.form.valid){
    this.service.SignUp(this.form.value)
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
