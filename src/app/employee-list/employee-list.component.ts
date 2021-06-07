import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AllserviceService } from '../service/allservice.service';
import { SharedData } from '../Shared/sharedData.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
name :any;
  Details = [];
  error: string;
  isLoad:boolean =false

  batches :any =[];

  value : string;
  SearchDetails: any =[];

  
  constructor(private Service: AllserviceService,
    private router: Router,
    private actRouter: ActivatedRoute,
    private shared : SharedData,) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(params => {
      console.log("parammap",params.get('batchName'));
      var batchName = params.get('batchName');
      if(batchName != undefined && batchName != "" ){
        this.form.controls['value'].setValue(batchName, {onlySelf: true});
        this.getList(batchName);
      }
      else{
        this.getList("")
      }
    })
    
  }


  form = new FormGroup({
   
    value: new FormControl(''),
  })
  
  Search() {
    if (this.name == "") {
      this.SendName(this.form.value.value);
    } else {
      this.SearchDetails = this.SearchDetails.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }


  getList(batchName) {
  
    this.Service.showThem().subscribe((res: any) => {
      
      this.Details = res.dic;
      if(batchName){
        this.SendName(batchName);
      }
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

  SendName(batchName){
    let g ={
      Batch_Name : batchName
    }
    console.log(g)
    this.isLoad =true
    this.Service.getSingleBatch(g).subscribe((res: any) => {
      this.SearchDetails = res.data;
      console.log(res)
      console.log(this.SearchDetails,"hhhhhhhhh")
      setTimeout(() => {
        this.isLoad = false;
      }, 1000);
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }


  DetailsPage(list){
    this.shared.updateSharedData(list);
    this.router.navigate(['dash/employeeDetails']);
  }

}
