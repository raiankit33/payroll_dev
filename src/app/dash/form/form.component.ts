import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MustMatch } from '../../service/must-match.validator.ts';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { AllserviceService } from 'src/app/service/allservice.service';
import { __assign } from 'tslib';
import { isString } from 'highcharts';
import { findIndex, isEmpty } from 'rxjs/operators';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  map = {};
  step: any = 1;
  show: boolean = true
  http: any;
  content = [];

  isLoading = false;

  setTime: boolean;

  progress: number = 0;
  user: any;
  err: string;
  open: boolean = false;
run:boolean =true

  execelValidationError = []

  constructor(private router: Router,
    private Service: AllserviceService,
    private ngxCsvParser: NgxCsvParser) {

  }



  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    // this.loadedScript("./assets/file.js");



  }

  disableIfSelected(colName) {
    let selectedColNames = Object.keys(this.map).map(k => k = k.trim());
    if (selectedColNames.includes(colName.trim())) {
      return true;
    }
    else {
      return false;
    }
  }

  CalledNew(event, name) {
    if (this.map && Object.keys(this.map).length == 0) {
      this.map[event] = name;
    }
    else {
      if (Object.values(this.map).indexOf(name) > -1) {
        this.deleteByValue(name);
        this.map[event] = name;
      }
      else {
        this.map[event] = name;
      }
    }
    console.log(this.map);
  }

  deleteByValue(val) {
    for (var prop in this.map) {
      if (this.map.hasOwnProperty(prop) && this.map[prop] == val) {
        delete this.map[prop];
      }
    }
  }

  Myform = new FormGroup({
    batch_name: new FormControl(''),
    sui_rate: new FormControl(''),
    upload: new FormControl(''),
  })

  form = new FormGroup({
    Worker_Unique_Id: new FormControl('Worker Unique Id'),
    id: new FormControl('', Validators.required),
    Worker_Name: new FormControl('Worker Name'),
    Name: new FormControl('', Validators.required),
    Worker_Title: new FormControl('Worker Title'),
    Title: new FormControl('', Validators.required),
    Worker_Manager: new FormControl('Worker Manager'),
    Manager: new FormControl('', Validators.required),
    Worker_Department: new FormControl('Worker Department'),
    Department: new FormControl('', Validators.required),
    Worker_Location: new FormControl('Worker Location'),
    Location: new FormControl('', Validators.required),
    Work_City: new FormControl('Work City'),
    City: new FormControl('', Validators.required),
    Work_State: new FormControl('Work State'),
    State: new FormControl('', Validators.required),
    Work_Zip: new FormControl('Work Zip'),
    Zip: new FormControl('', Validators.required),
    Over_Time_H: new FormControl(' Over Time'),
    OverTime: new FormControl('', Validators.required),
    Worker_Comp_Code: new FormControl('Worker Comp Code'),
    Comp_code: new FormControl('', Validators.required),
    Invoice_Number: new FormControl('Invoice Number'),
    invoice_Number: new FormControl('', Validators.required),
    ST_Pay_Rate: new FormControl('ST Pay Rate'),
    Pay_Rate: new FormControl('', Validators.required),

    Standard_Time_H: new FormControl('Standard Time'),
    standard_Time: new FormControl('', Validators.required),
    //
    Staffing_Company_Cost: new FormControl('Staffing Company Cost'),
    staffing_Company_Cost: new FormControl('', Validators.required),
    Work_State_Abb: new FormControl('Work State Abb'),
    work_State_Abb: new FormControl('', Validators.required),
    Markup_Percentage: new FormControl('Markup Percentage'),
    markup_Percentage: new FormControl('', Validators.required),
    Week_Start_Date: new FormControl('Start Date',),
    Start_Date: new FormControl('', Validators.required),
    Project_End: new FormControl('Project End'),
    project_End: new FormControl('', Validators.required),
    Worker_Agency: new FormControl('Worker Agency'),
    worker_Agency: new FormControl('', Validators.required),

    Double_Time_H: new FormControl('Double Time Hr'),
    Double_time: new FormControl('', Validators.required),
    OT_Pay_Rate: new FormControl('OT  Pay Rate'),
    ot_pay_rate: new FormControl('', Validators.required),
    DT_Pay_Rate: new FormControl('DT Pay Rate'),
    dT_Pay_Rate: new FormControl('', Validators.required),


  })

  public loadedScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(node);
  }




  filess = [];
  heading = [];
  header = [];
  csvRecords: any[] = [];
  onSelect(event) {
    for (this.progress = 0; this.progress <= 100; this.progress++) { }

    // this.filess.push(...event.addedFiles);
    const files = event.addedFiles;

    this.filess.push(files);
    if (files && files.length > 0) {
      this.onRemove(this.filess[0])
      let file: File = files[0];
      // console.log(file.name);


      // console.log(file.size);
      // console.log(file.type);
      //File reader method
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        console.log(allTextLines, 'ggggggg')
        allTextLines = csv.split(/\r|\n|\r/).filter(function (str) { return str });


        //Table Headings 
        let headers = allTextLines[0].split(',');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        //Pusd headings to array variable
        this.lines.push(tarr);
        this.heading.push(tarr);
        this.heading[0].forEach(header => {
          let headObj = { 'name': header, 'active': true };
          this.header.push(headObj);
        });
        //this.header = this.heading[0];
        // Table Rows
        let tarrR = [];

        let arrl = allTextLines.length;
        let rows = [];
        for (let i = 1; i < arrl; i++) {

          rows.push(allTextLines[i].split(','));

        }

        for (let j = 0; j < arrl; j++) {

          tarrR.push(rows[j]);

        }
        //Push rows to array variable
        this.linesR.push(tarrR);


        // Parse the file you want to select for the operation along with the configuration
        this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
          .pipe().subscribe((result: Array<any>) => {

            //console.log('Result', result);
            this.csvRecords = result;


            // for( var i= 0; i<=this.csvRecords.length; i++){
            //   var keys = Object.keys(this.csvRecords[i]);
            //     for( var k= 0; k<= keys.length ; k++){
            //         var keyValue  = this.map.get(keys[k]);

            //     }
            // }

            console.log('headerdrpdn', this.header);
            console.log('csvrecords', this.csvRecords);
            console.log('csvrecords_type', typeof (this.csvRecords));

          }, (error: NgxCSVParserError) => {
            console.log('Error', error);
          });
      }
    }
  }

  onRemove(event) {
    console.log(event);
    this.filess.splice(this.filess.indexOf(event), 1);

  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  renameKey(object, key, newKey) {
    const clonedObj = this.clone(object);
    const targetKey = clonedObj[key];
    delete clonedObj[key];
    clonedObj[newKey] = targetKey;
    return clonedObj;
  }

  clone(obj) {
    return Object.assign({}, obj);
  }




  matchUniqueBatch(event) {
    let m = {
      Batch_Name: event,
      user_id: this.user.id
    }
    console.log(event)
    this.Service.getMatchBatch(m).subscribe((res: any) => {
      if (res.statusCode == 200) {

      } else if (res.statusCode == 201) {
        this.err = "Batch Name  already registered. ",
          this.open = true;
        setTimeout(() => {
          this.open = false
        }, 4000);
      }
    })
  }




  normalizeExcel() {
    let colToBeReplaced = Object.keys(this.map);
    colToBeReplaced.forEach(colToChange => {
      for (let i = 0; i < this.csvRecords.length; i++) {
        this.csvRecords[i] = this.renameKey(this.csvRecords[i], colToChange.trim(), this.map[colToChange].trim());
      }
    });
    return this.csvRecords;
  }


  Method() {
    for (var i = 0; i < this.csvRecords.length; i++) {
      this.csvRecords[i]
      this.uniqueIdValidation(this.csvRecords[i]);
      this.uniqueNameValidation(this.csvRecords[i]);
      this.uniqueTitleValidation(this.csvRecords[i]);
      this.uniqueZipValidation(this.csvRecords[i]);
      this.uniqueStaffValidation(this.csvRecords[i])
      this.uniqueCompanyValidation(this.csvRecords[i]);
      this.hasEmptyElement(this.csvRecords[i]);
      this.uniqueOTPayValidation(this.csvRecords[i]);
      this.uniqueDoubleTimeValidation(this.csvRecords[i]);
      this.uniqueOverTimeValidation(this.csvRecords[i]);
      this.uniqueSTPayValidation(this.csvRecords[i]);
      this.uniqueTimeValidation(this.csvRecords[i]);
      this.uniqueMarkupValidation(this.csvRecords[i]);
      this.uniqueStateValidation(this.csvRecords[i]);
      this.uniqueDepatmentValidation(this.csvRecords[i]);
      this.uniqueManagerValidation(this.csvRecords[i]);
      this.uniqueCityValidation(this.csvRecords[i]);
      this.uniqueAgencyValidation(this.csvRecords[i]);
      this.uniqueLocationValidation(this.csvRecords[i]);
      this.uniqueHeader
    }
    console.log(this.execelValidationError)
  }




  uniqueIdValidation(csvRecords) {

    if (isNaN(csvRecords["Worker_Unique_Id"])) {
      let error = { "Message": "worker Unique Id does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  uniqueNameValidation(csvRecords) {

    var  user = csvRecords["Worker_Name"]

      for(var i = 0 ;  i<=user ;i++){
     
        if (typeof  user === 'string' || user instanceof String) {
  
          let error = { "Message": " Worker Name does not contain number  " }
          this.execelValidationError.push(error);
          break ;
        } 
    }
  }

  uniqueTitleValidation(csvRecords) {
    var user = csvRecords["Worker_Title"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Worker title does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }

  uniqueManagerValidation(csvRecords) {
    var user = csvRecords["Worker_Manager"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Worker_Manager does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }

  uniqueDepatmentValidation(csvRecords) {
    var user = csvRecords["Worker_Department"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Worker_Department does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }


  uniqueLocationValidation(csvRecords) {
    var user = csvRecords["Worker_Location"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Worker_Location does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }

  uniqueCityValidation(csvRecords) {
    var user = csvRecords["Work_City"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Work_City does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }


  uniqueStateValidation(csvRecords) {
    var user = csvRecords["Work_State"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Work_State does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }

  uniqueAgencyValidation(csvRecords) {
    var user = csvRecords["Worker_Agency"] ;
   
    for(var i = 0 ;  i<=user ;i++){
     
      if (typeof  user === 'string' || user instanceof String) {

        let error = { "Message": " Worker_Agency does not contain number  ", }
        this.execelValidationError.push(error );
        break ;
       }

    }
  }


  uniqueZipValidation(csvRecords) {
    if (isNaN(csvRecords["Work_Zip"])) {
      let error = { "Message": "worker Zip does not contain String value" }

      this.execelValidationError.push(error, );
    }
  }

  uniqueStaffValidation(csvRecords) {
    if (isNaN(csvRecords["Staffing_Company_Cost"])) {
      let error = { "Message": "Staffing_Company_Cost does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  uniqueCompanyValidation(csvRecords) {

    if (isNaN(csvRecords["Worker_Comp_Code"])) {
      let error = { "Message": "Worker_Comp_Code does not contain String value" }

      this.execelValidationError.push(error);
    }
  }
  uniqueTimeValidation(csvRecords) {

    if (isNaN(csvRecords["Standard_Time_H"])) {
      let error = { "Message": "Worker_Comp_Code does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  uniqueSTPayValidation(csvRecords) {

    if (isNaN(csvRecords["ST_Pay_Rate"])) {
      let error = { "Message": "ST_Pay_Rate does not contain String value" }

      this.execelValidationError.push(error);
    }
  }


  uniqueOverTimeValidation(csvRecords) {

    if (isNaN(csvRecords["Over_Time_H"])) {
      let error = { "Message": "Over_Time_H does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  uniqueOTPayValidation(csvRecords) {

    if (isNaN(csvRecords["OT_Pay_Rate"])) {
      let error = { "Message": "OT_Pay_Rate does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  uniqueDoubleTimeValidation(csvRecords) {

    if (isNaN(csvRecords["Double_Time_H"])) {
      let error = { "Message": "Double_Time_H does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  uniqueMarkupValidation(csvRecords) {

    if (isNaN(csvRecords["Markup_Percentage"])) {
      let error = { "Message": "Markup_Percentage does not contain String value" }

      this.execelValidationError.push(error);
    }
  }

  
  uniqueHeader(){
var user  = this.header

if(user == undefined   ){
  var error = { "Message": " header is missing " }
      this.execelValidationError.push(error);
 }
  }

 isEmptyObj(object) {
  for (var key in object) {
      if (object.hasOwnProperty(key)) {
        
          let error = { "Message": "empty does not contain String value", }
          
console.log(error)
      // this.execelValidationError.push(error);
        

      }
  }}

  hasEmptyElement(csvRecords) {

    // var test = csvRecords
    // for (var i = 0; i < test.length; i++) {
    //   if (test[i] == "undefined")

    //     var error = { "Message": " Emplty doest not contain Number" }
    //   this.execelValidationError.push(error);
    // }

  
   this.isEmptyObj(csvRecords)
      
    

   

  }

  
  


  submit() {
    if (this.form.valid) {
      this.csvRecords = this.normalizeExcel();

      // this.Method()
      let form = {
        batch_name: this.Myform.value.batch_name,
        SUI_pct: this.Myform.value.sui_rate,
        csv: this.csvRecords,
        user_id: this.user.id,
        user_name: this.user.name,
        user_email: this.user.email,
      }
      this.isLoading = true
      this.Service.addFile(form).subscribe(res => {
        this.show = false
        this.router.navigate(['dash/dashboad1']);
        console.log(res);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      })
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  next() {
    if (this.Myform.valid) {

      this.step = this.step + 1;
    } else {
      this.validateAllFormFields(this.Myform);
    }
  }

  errorMessage :boolean = false;
  next1() {
    if (this.Myform.valid) {
      this.csvRecords = this.normalizeExcel();
      this.Method()
      this.step = this.step + 1;
      if(this.execelValidationError.length > 1){
        
         this.errorMessage = true;
         this.show = false
      }else{
        this.show = true;
        this.errorMessage = false
      }
    } else {
      this.validateAllFormFields(this.Myform);
    }
  }


  validate(){
    this.run = false
    // this.Method();
 
  }





  previous() {
    this.step = this.step - 1;
  }

  download() {

  }
  reset: boolean = false

  //array varibales to store csv data
  lines = []; //for headings
  linesR = []; // for rows
  //File upload function
  changeListener(files: FileList) {
    console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);
        // console.log(allTextLines);
        //Table Headings
        let headers = allTextLines[0].split(',');
        let data = headers;
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        //Pusd headinf to array variable
        this.lines.push(tarr);


        // Table Rows
        let tarrR = [];
        //Create formdata object
        var myFormData = new FormData();
        let arrl = allTextLines.length;
        let rows = [];

        for (let i = 1; i < arrl; i++) {
          rows.push(allTextLines[i].split(','));
          //  console.log(rows,'gg')
          if (allTextLines[i] != "") {
            // Save file data into formdata varibale  
            myFormData.append("data" + i, allTextLines[i]);
          }
        }

        for (let j = 0; j < arrl; j++) {



          tarrR.push(rows[j]);
          tarrR = tarrR.filter(function (i) { return i != ""; });


          // Begin assigning parameters



        }
        //Push rows to array variable
        this.linesR.push(tarrR);

        //Sending post request with data to php file
        //  return this.http.post('http://localhost/mypage.php/'
        //        , myFormData).subscribe((res: Response) => {
        //      console.log("User Registration has been done.");



        //      });

      }
    }
  }

  clickMe() {
  }

  close() {
    this.router.navigate(['dash/dashboad']);
    this.setTime = true;
  }

}




class ValidationError {
  validationError: [] = [];
  validationObj = {};
  constructor(validationObj: any) {
    this.validationObj = validationObj;
  }

  get ValidationError() {
    return this.validationError;
  }

  set ValidationError(validationObj: any) {
    this.ValidationError.push(validationObj)
  }
}
