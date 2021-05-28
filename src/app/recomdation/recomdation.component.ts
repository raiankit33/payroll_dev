import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllserviceService } from '../service/allservice.service';

@Component({
  selector: 'app-recomdation',
  templateUrl: './recomdation.component.html',
  styleUrls: ['./recomdation.component.css']
})
export class RecomdationComponent implements OnInit {
  Details = [];
  error: string;
  AllDetails =[];

  constructor( private Service: AllserviceService,) { }

  ngOnInit(): void {
    this.getCsvFile();
    this.getList();
   
  }

  
  form = new FormGroup({
   
    id: new FormControl('', Validators.required),
  })

  getCsvFile() {

    this.Service.Show().subscribe((res: any) => {
      this.AllDetails = res.data;
     console.log(this.AllDetails,"jjjj")
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }


  getList() {
    let list = {
      Worker_Unique_Id :this.form.value.id
    }

    this.Service.getList(list).subscribe((res: any) => {
      this.Details = res.data;
     
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

}
