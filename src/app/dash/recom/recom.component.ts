import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-recom',
  templateUrl: './recom.component.html',
  styleUrls: ['./recom.component.css']
})
export class RecomComponent implements OnInit {
  Details =[];
  ADetails =[];
  error: string;
Show = []
hide :boolean =false
  constructor(  private router: Router,  private Service : AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting()
  }

  After(){
    this.hide = true
  }

  getSetting() {

    this.Service.ShowThem().subscribe((res: any) => {
      this.Details = res.data;
  
    
     console.log(this.Details)
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

  ShowName(){
    let tt ={
      Batch_Name : this.form.value.id
    }
    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.ADetails = res.data;

  })
  }

  GOtoForm(){
    this.router.navigate(['dash/form']);
  }

  form = new FormGroup({
   
    id: new FormControl('', Validators.required),
  })

}

