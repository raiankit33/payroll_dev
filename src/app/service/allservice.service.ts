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


  // start setting Api

  register(tenant) {

    return this.http.post('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/PayrollSetting/PayrollSetting ', tenant)
      .pipe(catchError(this.handleError));
  }

  getSetting() {

    return this.http.get('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/getPayrollSetting/getPayrollSetting')
      .pipe(catchError(this.handleError));
  }


  PostSetting(name) {

    return this.http.post('  https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/getIndivdualPayroll/getPayrollSetting', name)
      .pipe(catchError(this.handleError));
  }

  UpdateSetting(userObj) {

    return this.http.put('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/updateSettingPayroll/updateSettingPayroll', userObj)
      .pipe(catchError(this.handleError));
  }

   // end setting Api

   
  // client api 

  addFile(file) {

    return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/insertDataClient/insertDataClient', file)
      .pipe(catchError(this.handleError));
  }



  Show() {

    return this.http.get('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getData/getData')

  }


  showThem(d) {

    return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getDropDown',d)
      .pipe(catchError(this.handleError));
  }

  deleteBatch(g) {
    return this.http.post(' https://kszaxawodc.execute-api.us-west-2.amazonaws.com/DeleteBatch/DeleteBatch ', g)
      .pipe(catchError(this.handleError));


  }

  ShowAll(list) {

    return this.http.post(' https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getSingleBatch/getData', list)
      .pipe(catchError(this.handleError));
  }

  // employee list api 


  getEmployeeList(list) {

    return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/ClientDetails/getDropDown', list)
      .pipe(catchError(this.handleError));
  }



  // chart api 

  getSingleBatch(p) {
    return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getSingleBatch/getData', p)
      .pipe(catchError(this.handleError));

  }


  ChartData() {

    return this.http.get('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/getData/getData')
      .pipe(catchError(this.handleError));
  }


  // start drop down dashboad api filters

  getManager(manager) {

    return this.http.post('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/FilterManager/FilterManager', manager)
      .pipe(catchError(this.handleError));
  }


  getDepartment(D) {

    return this.http.post('https://lv45no88yg.execute-api.us-west-2.amazonaws.com/filterDepartment/filterDepartment', D)
      .pipe(catchError(this.handleError));
  }


  getVendor(v) {

    return this.http.post('https://lv45no88yg.execute-api.us-west-2.amazonaws.com/filterVendor/filterVendor', v)
      .pipe(catchError(this.handleError));
  }


  getDate(d){
     return this.http.post('https://lv45no88yg.execute-api.us-west-2.amazonaws.com/filterDate/filterDate',d).pipe(catchError(this.handleError))
  }

  filterAllData(m){
    return this.http.post('https://lv45no88yg.execute-api.us-west-2.amazonaws.com/filterAll/filterAll',m)
  }

  // end drop down dashboad api  filter


  getState(d){
    return this.http.post('https://lv45no88yg.execute-api.us-west-2.amazonaws.com/filterState/filterstate',d).pipe(catchError(this.handleError))
 }


getEmployeeState(e){
   return this.http.put('https://kszaxawodc.execute-api.us-west-2.amazonaws.com/updateClientData/getData',e).pipe(catchError(this.handleError))
}
   
getMatchBatch(m){
  return this.http.post('https://3c9jp16lpb.execute-api.us-west-2.amazonaws.com/validateBatchName/validateBatchName',m)
}


//

//test file 
postTest(m){
  return this.http.post('https://zzea8bdb46.execute-api.us-west-2.amazonaws.com/new/new',m)
}


//



forgetPassword(m){
  return this.http.post('https://ly4d48q8la.execute-api.us-west-2.amazonaws.com/forgotpassword/forgotpassword  ',m)
}

getAdminDetailPage(m){
  return this.http.post('https://kev3fwtqj2.execute-api.us-west-2.amazonaws.com/BatchPerUser/BatchPerUser  ',m)
}


}

