import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import {Chart} from 'chart.js';
import { AllserviceService } from 'src/app/service/allservice.service';








@Component({
  selector: 'app-dashboad1',
  templateUrl: './dashboad1.component.html',
  styleUrls: ['./dashboad1.component.css']
})
export class Dashboad1Component implements OnInit {

  Chart = []
  Swordtail :any = [];
details = [];


  constructor( private router: Router,
    private Service: AllserviceService,) { }

  ngOnInit(): void {
    this.getShow();
    this.Service.Show().subscribe( res => {
      this.Swordtail = res 
     
    
     
     

      
      // let total_ = this.Swordtail.map(reso:any => reso.data.Tech_TAX)
      // let total_pay = this.Swordtail.map(reso:any => reso.data.Total_PAY)
    
   
   
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['Total Cost', 'Total Saving ', 'Total Tax' ],
          datasets: [{
              label:'',
              data: [this.Swordtail.T_COST, this.Swordtail.T_Saving,this.Swordtail.T_Tax ],
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
 

  // next pie 


  var myChart = new Chart('Chart', {
    type: 'pie',
    data: {
        labels: ['Total Cost', 'Total Saving ', 'Total Tax'],
        datasets: [{
           
            data: [this.Swordtail.T_COST, this.Swordtail.T_Saving, this.Swordtail.T_Tax , ],
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



var myChart = new Chart('Donut', {
  type: 'doughnut',
  data: {
      labels: [ 'FUI_TAX ','SUI_TAX'],
      datasets: [{
          label: '',
          data: [this.Swordtail.FUI_TAX, this.Swordtail.SUI_TAX],
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


var myChart = new Chart('line', {
  type: 'line',
  data: {
      labels: ['FEE_TAX', 'FICA_TAX', 'Sales_TAX','Delivery_TAX','EPLI_TAX','FUI_Sol_TAX','FICA_Med_TAX','Tech_TAX'],
      datasets: [{
         
        data: [this.Swordtail.FEE_TAX, this.Swordtail.FICA_TAX,this.Swordtail.Sales_TAX,this.Swordtail.Delivery_TAX,this.Swordtail.EPLI_TAX,this.Swordtail.FUI_Sol_TAX,this.Swordtail.FICA_Med_TAX,this.Swordtail.Tech_TAX],
          fill: false,
     
       backgroundColor: [
            'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(25, 205, 86)',
    'rgb(255, 205, 6)',
    'rgb(25, 205, 86)',
    'rgb(255, 205, 8)'
          ],
          borderColor:[
            'rgb(255, 99, 132)',
          ],
          borderWidth: 9
      }

    ]
  },
  options: {
      
  }
});

})

    }
  
sum = []

  getShow(){
    this.Service.Show().subscribe( (res:any)=>{
     this.details = res.data
    
   


    })
  }



  

  refresh(){
    location.reload();
  }

  clickMe(){
    this.router.navigate(['dash/form']);
  }

  
}
