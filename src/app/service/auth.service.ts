import { Injectable } from "@angular/core";


import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any;
  authToken: any;
  user: any;



  httpRegisterOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        //  'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
}

constructor(private http:HttpClient) {}


handleError(error){
  return throwError(error.message || "server error...........!")
}



authenticateUser(user) {
  return this.http.post<any>('https://ly4d48q8la.execute-api.us-west-2.amazonaws.com/userlogin/userlogin', user)
  .pipe(catchError(this.handleError));;
}


SignUp(user) {
  return this.http.post<any>('https://ly4d48q8la.execute-api.us-west-2.amazonaws.com/addnewuserlogin/addnewuserlogin', user)
  .pipe(catchError(this.handleError));;
}




      storeUserData(token,user){
        localStorage.setItem('token',token);
        localStorage.setItem('user', JSON.stringify(user));
       
        this.authToken = token;
        this.user = user;
        
   }



     logout(){
      localStorage.removeItem('token');
         this.authToken =null;
         this.user =null;
         localStorage.clear();
     }

}
