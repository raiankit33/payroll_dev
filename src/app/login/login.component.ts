import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from  '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private router: Router,
    // private toastr: ToastrService,
    private service : AuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

  }



  form = new FormGroup({
   
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
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
    this.service.authenticateUser(this.form.value)
      .subscribe(
        (data) => {
          if(data.statusCode==200){
            // localStorage.setItem('AuthToken', data.token);
            this.service.storeUserData(data.token, data.user);
            // this.toastr.success('Success ! logged In');
            console.log('success')
            this.router.navigate(['dash/dashboad']);
        
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
