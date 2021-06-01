import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
  p: number = 1;
  count : number = 5;
  Details = [];
  error: string;

  name: any;
  total_count: any;
  time: any;

  constructor( private router: Router,  private Service : AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting();
  }


  getSetting() {

    this.Service.showThem().subscribe((res: any) => {
      this.Details = res.data;
     this.total_count = res.length;
     this.time = res.time;
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

  Search() {
    if (this.name == "") {
      this.getSetting();
    } else {
      this.Details = this.Details.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  deleteBatch(s){
    let d ={
      Batch_Name : s
    }
  
    this.Service.deleteBatch(d).subscribe((res: any) => {
      this.Details = res.data;
    this.getSetting();
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

nameR:any;
 

  SearchD :any =[]
  SendData(event){
    console.log(event)
 
    console.log(this.SearchD)
    this.router.navigate(['dash/employeeList']);
  }

}
