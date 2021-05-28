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
hide :boolean =false;

cost:any;
  saving :any;
  markup:any;
  tax:any;
  constructor(  private router: Router,  private Service : AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting()
  }



  form = new FormGroup({
   
    id: new FormControl(''),
  })

  After(){
    this.hide = true
  }

  getSetting() {

    this.Service.ShowThem().subscribe((res: any) => {
      this.Details = res.data;
  
    
    
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

  ShowName(){
    let tt ={
      Batch_Name : this.form.value.id
    }
    console.log(tt)
    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.ADetails = res.data;
      this.cost = res.T_Cost;
      this.markup = res.T_Markup;
      this.tax = res.T_Tax;
      this.saving = res.T_Saving;
   
  })
  }

  GOtoForm(){
    this.router.navigate(['dash/form']);
  }



}

