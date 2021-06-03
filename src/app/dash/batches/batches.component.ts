import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';
import Swal from 'sweetalert2';

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
      this.Details = res.dic;
      console.log(res,"ttttttt")
     this.total_count = res.length;
     this.time = res.time[0];
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let d ={
          Batch_Name : s
        }
        this.Service.deleteBatch(d).subscribe((res: any) => {
          this.getSetting();

          Swal.fire(
            'Deleted!',
            
            'success'
          )

        });

      }
    })
  }
    
  
  

nameR:any;
 

  SearchD :any =[]
  SendData(event){
    console.log(event)
 
    console.log(this.SearchD)
    this.router.navigate(['dash/employeeList']);
  }





}