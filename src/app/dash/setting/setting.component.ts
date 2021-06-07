import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { formatDate, JsonPipe } from '@angular/common';
import { AllserviceService } from 'src/app/service/allservice.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import swal from 'sweetalert2'


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  dropDown: any;
  isLoading: boolean = false;
  Details = [];
  error: string;
  SearchDetails = [];
  p: number = 1;

  constructor(private http: HttpClient,
    private Service: AllserviceService,
    private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
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

    id: new FormControl('', Validators.required),
    SUI: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{2}")]),
    FUI: new FormControl('', Validators.required),
    FICA: new FormControl('', Validators.required),
    WC: new FormControl('', Validators.required),
    WC_Admin: new FormControl('', Validators.required),
    EPLI: new FormControl('', Validators.required),
    FEE: new FormControl('', Validators.required),
    Tech: new FormControl('', Validators.required),
    Delivery: new FormControl('', Validators.required),

    upload: new FormControl('', Validators.required),
    state_name: new FormControl('----SELECT----', Validators.required),

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
    this.Service.register(this.csvRecords).subscribe(res => {

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



  // csvRecords: any[] = [];


  // @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // // Your applications input change listener for the CSV File
  // fileChangeListener($event: any): void {

  //   // Select the files from the event
  //   const files = $event.srcElement.files;

  //   // Parse the file you want to select for the operation along with the configuration
  //   this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
  //     .pipe().subscribe((result: Array<any>) => {

  //       console.log('Result', result);
  //       this.csvRecords = result;

  //       this.Service.register(result).subscribe( res=> {
  //         console.log(res);
  //        })

  //     }, (error: NgxCSVParserError) => {
  //       console.log('Error', error);
  //     });



  getSetting() {

    this.Service.getSetting().subscribe((res: any) => {
      this.Details = res.data;

     
      this.sendStateName(this.Details)
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
    this.Service.UpdateSetting(this.userObj).subscribe(res => {
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
      States:event 
    }
    console.log(name)
    this.isLoad = true
    this.Service.PostSetting(name).subscribe((res: any) => {
      this.SearchDetails = res.data;
      setTimeout(() => {
        this.isLoad = false;
      }, 1000);
    }
    )

  }




}












