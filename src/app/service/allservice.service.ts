import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {



  httpRegisterOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error) {
    return throwError(error.message || "server Error...........!")
  }

    constructor(private http: HttpClient) { }

    register(tenant) {

      return this.http.post('https://ii1q92eb28.execute-api.us-west-1.amazonaws.com/insert', tenant)
        .pipe(catchError(this.handleError));
    }

  }

