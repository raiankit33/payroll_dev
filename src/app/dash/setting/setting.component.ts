import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { formatDate, JsonPipe } from '@angular/common';
import { AllserviceService } from 'src/app/service/allservice.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  dropDown:any;

  constructor(private http: HttpClient,
    private Service : AllserviceService,) { }

  ngOnInit(): void {
    
  }

 

  files: File[] = [];

onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

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
  
  
})



lines = []; //for headings
linesR = []; // for rows
filess = [];
heading = [];
header = [];

// 

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
        allTextLines = csv.split(/\r|\n|\r/).filter(function(str){ return  str});
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
       
       console.log(tarrR);
      

       
let dd = {
   dd : JSON.stringify(myFormData)
}
console.log(dd,'dddddddddddddd')

       this.Service.register(dd).subscribe( res=> {
        console.log(res);
       })
      

        // return this.http.post('https://ii1q92eb28.execute-api.us-west-1.amazonaws.com/insert'
        //       , myFormData).subscribe((res: Response) => {
        //     console.log("User Registration has been done.");       
        //     });
        
    }


    
  }
}

}









