import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { AllserviceService } from 'src/app/service/allservice.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {

  dropDown: any;
  isLoading: boolean = false;
  Details = [];
  error: string;
  SearchDetails = [];
  p: number = 1;
  user: any;

  constructor(private http: HttpClient,
    private Service: AllserviceService,
    private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getSetting();

  }

  userObj = {
    Delivery_cap: "",
    Delivery_pct: "",
    EPLI_cap: "",
    EPLI_pct: "",
    FEE_cap: "",
    FEE_pct: "",
    FICA_Med_cap: "",
    FICA_Med_pct: "",
    FICA_cap: "",
    FICA_pct: "",
    FUI_Sol_cap: "",
    FUI_Sol_pct: "",
    FUI_cap: "",
    FUI_pct: "",
    SUI_cap: "",
    SUI_pct: "",
    Sales_Tax_cap: "",
    Sales_Tax_pct: "",
    States: "",
    Tech_cap: "",
    Tech_pct: "",
    WC_Admin_cap: "",
    WC_Admin_pct: "",
    WC_cap: "",
    WC_pct: "",
    id: "",
  }

  files: File[] = [];
  heading = [];
  header = [];




  form = new FormGroup({

    // id: new FormControl('', Validators.required),
    // SUI: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{2}")]),
    // FUI: new FormControl('', Validators.required),
    // FICA: new FormControl('', Validators.required),
    // WC: new FormControl('', Validators.required),
    // WC_Admin: new FormControl('', Validators.required),
    // EPLI: new FormControl('', Validators.required),
    // FEE: new FormControl('', Validators.required),
    // Tech: new FormControl('', Validators.required),
    // Delivery: new FormControl('', Validators.required),

    upload: new FormControl('', Validators.required),
    // state_name: new FormControl('----SELECT----', Validators.required),

    //


  })

Myform = new FormGroup({
  PPO: new FormControl('', Validators.required),
  Vision: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{2}")]),
  Holiday: new FormControl('', Validators.required),
  HMO: new FormControl('', Validators.required),

  Sick_leave: new FormControl('', Validators.required),
  Vacation: new FormControl('', Validators.required),
  Dental: new FormControl('', Validators.required),
  FourK: new FormControl('', Validators.required),
  Bonus: new FormControl('', Validators.required),

})


  filess = [];

  lines = []; //for headings
  linesR = []; // for rows
  csvRecords: any[] = [];
  progress: number = 0;
  changeListener(event) {
    for (this.progress = 0; this.progress <= 100; this.progress++) { }
    console.log(event)
    // this.filess.push(...event.addedFiles);
    const files = event.target.files;

    this.filess.push(files);
    if (files && files.length > 0) {
     
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
        this.header = this.heading[0];



        // Table Rows
        let tarrR = [];
        var myFormData = new FormData();
        let arrl = allTextLines.length;
        let rows = [];
        for (let i = 1; i < arrl; i++) {

          rows.push(allTextLines[i].split(','));
          if (allTextLines[i] != "") {
            // Save file data into formdata varibale  
            myFormData.append("data" + i, allTextLines[i]);
          }
        }

        for (let j = 0; j < arrl; j++) {

          tarrR.push(rows[j]);

        }
        //Push rows to array variable
        this.linesR.push(tarrR);


        // Parse the file you want to select for the operation along with the configuration
        this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
          .pipe().subscribe((result: Array<any>) => {


            this.csvRecords = result;


          }, (error: NgxCSVParserError) => {
            console.log('Error', error);
          });
      }
    }
  }

  onSubmit() {
    this.isLoading = true;
 
    if(this.form.value.upload){
         let up ={
      csv : this.csvRecords,
      AuthToken :this.user.token
    }
      this.Service.register(up).subscribe(res => {

        setTimeout(() => {
          this.isLoading = false;
        }, 1000, swal.fire(
          'File uploaded successfully!',
          '',
          'success'
        ));
        this.getSetting();
  
      })
    }

  }



  // csvRecords: any[] = [];





  getSetting() {
    let s ={
      AuthToken :this.user.token
    }

    this.Service.getSetting(s).subscribe((res: any) => {
      this.Details = res.data;

    var length =this.Details.length
    
      this.sendStateName(this.Details[length - 1].States)
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }


  EditSetting(s) {
    this.userObj = s;
    console.log(this.userObj)
  }

  updateSetting() {
    let update ={
    update : this.userObj ,
    AuthToken : this.user.token

    }
    this.Service.UpdateSetting(update).subscribe(res => {
      this.getSetting();
      swal.fire(
        'File updated successfully!',
        '',
        'success'
      )
    })
  }


  isLoad: boolean = false;
  sendStateName(event) {
    let name = {
      States:event ,
      AuthToken :this.user.token
    }
    console.log(name)
    this.isLoad = true
    this.Service.PostSetting(name).subscribe((res: any) => {
      this.SearchDetails = res.data;
      console.log(this.SearchDetails)
      setTimeout(() => {
        this.isLoad = false;
      }, 1000);
    }
    )

  }

  Require(){
   let v = {
    PPO: this.Myform.value.PPO,
    Vision: this.Myform.value.Vision,
    Holiday: this.Myform.value.Holiday,
    HMO: this.Myform.value.HMO,
  
    Sick_leave: this.Myform.value.Sick_leave,
    Vacation: this.Myform.value.Vacation,
    Dental: this.Myform.value.Dental,
    FourK: this.Myform.value.FourK,
    Bonus: this.Myform.value.Bonus,
    user_id : this.user.id
   }

      this.Service.postTest(v).subscribe(res => {

      })
  


}


}









