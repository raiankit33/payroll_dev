import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-recom',
  templateUrl: './recom.component.html',
  styleUrls: ['./recom.component.css']
})
export class RecomComponent implements OnInit {
  Details =[];
  error: string;

  constructor(  private router: Router,  private Service : AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting()
  }



  getSetting() {

    this.Service.Show().subscribe((res: any) => {
      this.Details = res.data;
     console.log(this.Details)
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }


  GOtoForm(){
    this.router.navigate(['dash/form']);
  }

}

