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


    // setting Api

    register(tenant) {

      return this.http.post('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/PayrollSetting/PayrollSetting ', tenant)
        .pipe(catchError(this.handleError));
    }

    getSetting() {

      return this.http.get('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/getPayrollSetting/getPayrollSetting')
        .pipe(catchError(this.handleError));
    }


    PostSetting(name) {

      return this.http.post('  https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/getIndivdualPayroll/getPayrollSetting',name)
        .pipe(catchError(this.handleError));
    }

    UpdateSetting(userObj) {

      return this.http.put('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/updateSettingPayroll/updateSettingPayroll',userObj)
        .pipe(catchError(this.handleError));
    }

    // client api 

    addFile(file) {

      return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/insertdata/insertdata', file)
        .pipe(catchError(this.handleError));
    }



    Show() {

      return this.http.get('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getData/getData')
        
    }


    ShowThem() {

      return this.http.get('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getDropDown/getDropDown ')
        .pipe(catchError(this.handleError));
    }
    
    ShowAll(list) {

      return this.http.post(' https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getSingleBatch/getData',list)
        .pipe(catchError(this.handleError));
    }
  
// employee list api 

  
getList(list) {

  return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/ClientDetails/getDropDown',list)
    .pipe(catchError(this.handleError));
}



// chart api 

getSingleBatch(p){
  return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getSingleBatch/getData',p)
  .pipe(catchError(this.handleError));
  

}


Chart(){
    
  return this.http.get('')
  .pipe(catchError(this.handleError));
  }



  ChartData(){
    
  return this.http.get('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getData/getData')
  .pipe(catchError(this.handleError));
  }


  }

