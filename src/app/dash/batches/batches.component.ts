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

  constructor( private router: Router,  private Service : AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting();
  }


  getSetting() {

    this.Service.ShowThem().subscribe((res: any) => {
      this.Details = res.data;
     console.log(this.Details,"hhhh")
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



}
