import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import {Chart} from 'chart.js';
import { AllserviceService } from 'src/app/service/allservice.service';
import { FormControl, FormGroup } from '@angular/forms';








@Component({
  selector: 'app-dashboad1',
  templateUrl: './dashboad1.component.html',
  styleUrls: ['./dashboad1.component.css']
})
export class Dashboad1Component implements OnInit {

  Chart = []
  Swordtail :any = [];
Details = [];



NameDetails =[];
error: string;
Show = []
hide :boolean =false;
cost: any;
saving :any;
markup:any;
tax:any;



Delivery_tAX: any;
Double_time_Total: any;
EPLI_tAX: any;
FEE_tAX: any;
FICA_med_TAX: any;
FICA_tAX: any;
FUI_tol_TAX:any; 
FUI_tAX: any;
over_time_Total:any
sUI_tAX: any;
sales_tAX: any;
standard_time_Total: any;
Tech_tAX: any;
WC_admin_TAX:any;
WC_tAX: any;

  constructor( private router: Router,
    private Service: AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting();
    this.Service.Show().subscribe( res => {
      this.Swordtail = res 
     
    
     
     

      
      // let total_ = this.Swordtail.map(reso:any => reso.data.Tech_TAX)
      // let total_pay = this.Swordtail.map(reso:any => reso.data.Total_PAY)
    
   
   

})

    }


    form = new FormGroup({
   
      id: new FormControl(''),
    })
  
sum = []





  

  refresh(){
    location.reload();
  }

  clickMe(){
    this.router.navigate(['dash/form']);
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
      this.NameDetails = res.data;
      console.log(res)
      this.cost = res.T_Cost;
      this.markup = res.T_Markup;
      this.tax = res.T_Tax;
      this.saving = res.T_Saving;
      this.Delivery_tAX = res.Delivery_TAX;
      this.Double_time_Total = res.Double_Time_Total;
      this.EPLI_tAX = res.EPLI_TAX;
      this.FEE_tAX =res.FEE_TAX;
      this.FICA_med_TAX =res.FICA_Med_TAX;
      this.FICA_tAX =res.FICA_TAX;
      this.FUI_tol_TAX =res.FUI_Sol_TAX;
      this.FUI_tAX =res.FUI_TAX;
      this.over_time_Total=res.Over_Time_Total;
      this.sUI_tAX=res.SUI_TAX;
      this.sales_tAX=res.Sales_TAX;
      this.standard_time_Total=res.Standard_Time_Total;
      this.Tech_tAX =res.Tech_TAX;
      this.WC_admin_TAX=res.WC_Admin_TAX;
      this.WC_tAX =res.WC_TAX;


      var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
            labels: ['Total Cost', 'Total Saving ', 'Total Tax' ],
            datasets: [{
                label:'',
                data: [  this.cost,this.saving ,this.tax  ],
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
   
  
    var myChart = new Chart('Chart', {
      type: 'pie',
      data: {
          labels: ['Total Cost', 'Total Saving ', 'Total Tax'],
          datasets: [{
             
              data: [this.cost ,this.saving  ,this.tax ],
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
           
          data: [ this.FEE_tAX, this.FICA_tAX, this.sales_tAX,this.Delivery_tAX,this.EPLI_tAX,this.FUI_tAX,this.FICA_med_TAX,this.Tech_tAX],
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

  

      var myChart = new Chart('Donut', {
        type: 'doughnut',
        data: {
            labels: [ 'FUI_TAX ','SUI_TAX'],
            datasets: [{
                label: '',
                data: [ this.FUI_tAX , this.sUI_tAX],
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
  })
  }


 
  GOtoForm(){
    this.router.navigate(['dash/form']);
  }


  
}
