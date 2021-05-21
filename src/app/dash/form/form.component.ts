import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MustMatch } from '../../service/must-match.validator.ts';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  step: any = 1;

  http: any;
  content = [];
  
setTime : boolean;
 
  progress: number = 0;

  constructor(private router: Router,) { }



  ngOnInit(): void {
    // this.loadedScript("./assets/file.js");



  }
 



  form = new FormGroup({
    worker_id: new FormControl('Worker Unique Id'),
    id: new FormControl('', Validators.required),
    worker_name: new FormControl('Worker Name'),
    Name: new FormControl('', Validators.required),
    worker_title: new FormControl('Worker Title'),
    Title: new FormControl('', Validators.required),
    worker_manager: new FormControl('Worker Manager'),
    Manager: new FormControl('', Validators.required),
    worker_dept: new FormControl('Worker Department'),
    Department: new FormControl('', Validators.required),
    worker_location: new FormControl('Worker Location'),
    Location: new FormControl('', Validators.required),
    worker_city: new FormControl('Work City'),
    City: new FormControl('', Validators.required),
    worker_state: new FormControl('Work State'),
    State: new FormControl('', Validators.required),
    worker_zip: new FormControl('Work Zip'),
    Zip: new FormControl('', Validators.required),
    overtime: new FormControl(' OverTime'),
    OverTime: new FormControl('', Validators.required),
    worker_code: new FormControl('Worker Comp Code'),
    Comp_code: new FormControl('', Validators.required),
    invoice: new FormControl('Invoice Number'),
    Invoice_Number: new FormControl('', Validators.required),
    rate: new FormControl('Pay Rate'),
    Pay_Rate: new FormControl('', Validators.required),

    time: new FormControl('standard Time'),
    standard_Time: new FormControl('', Validators.required),
    worker_bill: new FormControl('Bill Rate'),
    bill: new FormControl('', Validators.required),
    percantage: new FormControl('Markup Percantage'),
    Markup_Percantage: new FormControl('', Validators.required),
    date: new FormControl('Start Date',),
    Start_Date: new FormControl('', Validators.required),
    project: new FormControl('Project End'),
    Project_End: new FormControl('', Validators.required),
    agency: new FormControl('worker Agency'),
    Worker_Agency: new FormControl('', Validators.required),

  }
   
  
  )





  public loadedScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  filess = [];
  heading = [];
  header = [];

  onSelect(event) {
    for (this.progress = 0; this.progress <= 100; this.progress++) { }

    // this.filess.push(...event.addedFiles);
    const files = event.addedFiles;

    this.filess.push(files);
    if (files && files.length > 0) {
      this.onRemove(this.filess[0])
      let file: File = files[0];
      console.log(file.name);
    
    
      console.log(file.size);
      console.log(file.type);
      //File reader method
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result;
        let allTextLines = [];
     
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
        this.header = this.heading[0];
      


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
  console.log(this.linesR)
      }
    }
  }






  onRemove(event) {
    console.log(event);
    this.filess.splice(this.filess.indexOf(event), 1);

  }


  

  next() {
    this.step = this.step + 1;
    let tt = {
      id: this.form.value.id,
      Name: this.form.value.Name,
      Title: this.form.value.Title,
      Manager:this.form.value.Manager, 
     Department:this.form.value.Department,
      Location:this.form.value.Location,
        City:this.form.value.city,
      State:this.form.value.State,
        Zip:this.form.value.zip,
      OverTime:this.form.value.OverTime,
        Comp_code:this.form.value.Comp_code,

      Invoice_Number:this.form.value.Invoice_Number,

        Pay_Rate:this.form.value.Pay_Rate,


      standard_Time:this.form.value.standard_Time,

        bill:this.form.value.bill,

      Markup_Percantage:this.form.value.Markup_Percantage,

        Start_Date:this.form.value.Start_Date,

      Project_End:this.form.value.Project_End,

        Worker_Agency:this.form.value.Worker_Agency,
    }
    console.log(tt)
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
           let headers = allTextLines[0].split(';');
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
           rows.push(allTextLines[i].split(';'));
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
           console.log(myFormData,'form')
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
   this.setTime =true;
  }

}
