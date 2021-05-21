import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
    // const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    // const container = document.getElementById('container');

    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });
    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });
  }



  form = new FormGroup({
   
    email: new FormControl('admin@gmail.com',Validators.required),
    password: new FormControl('12345',Validators.required),
  })

  onSubmit(){
     if(this.form.value.email == 'admin@gmail.com' && this.form.value.password == '12345'){
      
      this.router.navigate(['dash/dashboad1']);
     }else{
       console.log('fail to log ')
     }
   }

}
