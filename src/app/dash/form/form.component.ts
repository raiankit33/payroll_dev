import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MustMatch } from '../../service/must-match.validator.ts';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { AllserviceService } from 'src/app/service/allservice.service';
import { __assign } from 'tslib';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  map = {};
  step: any = 1;
 show :boolean =true
  http: any;
  content = [];
  
  isLoading = false;

setTime : boolean;
 
  progress: number = 0;

  constructor(private router: Router,
    private Service : AllserviceService,
    private ngxCsvParser: NgxCsvParser) { 

    
   
    }



  ngOnInit(): void {
    // this.loadedScript("./assets/file.js");

    //this.map.set( "Worker_Unique_Id","Po1"); 
//     this.map.set("po2", "Worker_Name");
//  this.map.set("", "Worker_Title");
//  this.map.set("", "Worker_Manager");
//   this.map.set("", "Worker_Department");
//   this.map.set("", "Worker_Location");
//   this.map.set("", "Work_City");
//   this.map.set("", "Work_State");
//    this.map.set("", "Work_Zip");
//    this.map.set("", "Worker_Comp_Code");
//    this.map.set("", "Invoice_Number");
//    this.map.set("", "Standard_Time_H");
//    this.map.set("", "Standard_Time_H");
//    this.map.set("", "Standard_Time_H");
//    this.map.set("", "Standard_Time_H");
//    this.map.set("", "Standard_Time_H");
// this.map.get('Po1');

  
  }

  disableIfSelected(colName){
    let selectedColNames = Object.keys(this.map).map(k => k = k.trim());
    if(selectedColNames.includes(colName.trim())){
      return true;
    }
    else{
      return false;
    }
  }

  CalledNew(event,name){
   if(this.map && Object.keys(this.map).length == 0){
     this.map[event] = name;
   }
   else{
    if (Object.values(this.map).indexOf(name) > -1) 
    {
      this.deleteByValue(name);
      this.map[event] = name;
    }
    else{
      this.map[event] = name;
    }   
   }
   console.log(this.map);
  }

  deleteByValue(val) {
      for(var prop in this.map) {
          if(this.map.hasOwnProperty(prop) && this.map[prop] == val) {
              delete this.map[prop];
          }
      }
  }
 
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

    batch_name :new FormControl(''),
    sui_rate :new FormControl(''),
  })

  public loadedScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(node);
  }


  //  tt = {
  //     id: this.form.value.id,
  //     Name: this.form.value.Name,
  //     Title: this.form.value.Title,
  //     Manager:this.form.value.Manager, 
  //    Department:this.form.value.Department,
  //     Location:this.form.value.Location,
  //       City:this.form.value.city,
  //     State:this.form.value.State,
  //       Zip:this.form.value.zip,
  //     OverTime:this.form.value.OverTime,
  //       Comp_code:this.form.value.Comp_code,

  //     Invoice_Number:this.form.value.Invoice_Number,

  //       Pay_Rate:this.form.value.Pay_Rate,


  //     standard_Time:this.form.value.standard_Time,

  //       bill:this.form.value.bill,

  //     Markup_Percantage:this.form.value.Markup_Percantage,

  //       Start_Date:this.form.value.Start_Date,

  //     Project_End:this.form.value.Project_End,

  //       Worker_Agency:this.form.value.Worker_Agency,

        
        
  //   }
   
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
      console.log(allTextLines,'ggggggg')
        allTextLines = csv.split(/\r|\n|\r/).filter(function(str){ return  str});
 

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
          let headObj = {'name':header, 'active':true};
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
    
  console.log('headerdrpdn',this.header);    
  console.log('csvrecords',this.csvRecords);
  console.log('csvrecords_type',typeof(this.csvRecords));
    
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

renameKey(object,key,newKey){
  const clonedObj = this.clone(object);
  const targetKey = clonedObj[key];
  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
}

clone(obj){
  return Object.assign({}, obj);
}

normalizeExcel(){
  let colToBeReplaced = Object.keys(this.map);
  colToBeReplaced.forEach( colToChange => {
    for(let i = 0; i < this.csvRecords.length; i++){
      this.csvRecords[i] =  this.renameKey(this.csvRecords[i],colToChange.trim(),this.map[colToChange].trim());
    }
  });
  return this.csvRecords;
}

submit(){
 if(this.form){
 this.csvRecords = this.normalizeExcel(); 
  let form ={
    batch_name : this.form.value.batch_name,
    SUI_pct: this.form.value.sui_rate,
    csv : this.csvRecords }
  this.isLoading =true
  this.Service.addFile(form).subscribe( res=> {
    this.show = false
    console.log(res);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
   })
 }else{
  this.validateAllFormFields(this.form);
 }
}
  
  next() {
    this.step = this.step + 1;
  
    
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
   changeListener(files: FileList){
     console.log(files);
     if(files && files.length > 0) {
        let file : File = files.item(0); 
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
           
           for(let i = 1; i < arrl; i++){
           rows.push(allTextLines[i].split(','));
          //  console.log(rows,'gg')
           if(allTextLines[i]!=""){
           // Save file data into formdata varibale  
           myFormData.append("data"+i, allTextLines[i]);
         }
           }
          
           for (let j = 0; j < arrl; j++) {
            
             
              
               tarrR.push(rows[j]);
               tarrR = tarrR.filter(function(i){ return i != ""; });
               
               
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
    this.router.navigate(['dash/dashboad1']);
   this.setTime =true;
  }

}
