import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Chart} from 'chart.js';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Details: any = [];
  error: string;
  AllDetails:any  =[];


  constructor( private Service: AllserviceService,) { }

  gg  = []
  ngOnInit(): void {
    this.getCsvFile();
    this.getList();

  
    var myChart = new Chart('Chart', {
      type: 'pie',
      data: {
          labels: ['ST Total', 'OT Total ', 'DT Total '],
          datasets: [{
              label: 'Intra Day Forecast',
              data: [this.Details.DT_total,this.Details.OT_total,this.Details.ST_total],
              fill: true,
         
           backgroundColor: [
                'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
              ],
              borderWidth: 3
          }
    
        ]
      },
      options: {
          
      }
  });
  
   
  }

  
  form = new FormGroup({
   
    id: new FormControl('', Validators.required),
  })

  AllD :any = []
  getCsvFile() {

    this.Service.Show().subscribe((res: any) => {
      this.AllDetails = res.data;

      
    
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }


  getList() {
    let list = {
      Worker_Unique_Id :this.form.value.id
    }
  console.log(list)
    this.Service.getList(list).subscribe((res: any) => {
      this.Details = res.data;

     
   

    
    

     console.log(this.Details,"hhh")
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

}
