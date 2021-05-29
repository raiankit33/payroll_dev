import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';
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
isLoad :boolean =false


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
  value: any;

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


  // findsum(data){
  //   this.value = data 
  //   for(let i =0 ; i < data.length ; i++){
  //       this.ss + this.value[i].EPLI_TAX
  //       console.log(this.ss,'kkkk')
  //   }
  // }

  ss :any = [];
  TotalSaving:any = []
  ShowName(){
    let tt ={
      Batch_Name : this.form.value.id
    }
    this.isLoad =true
    
    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.NameDetails = res.data;
     
     this.TotalSaving = this.NameDetails.filter(x => x.Saving > 1500).slice(0,10).sort(function(a,b){
      return  b.Saving - a.Saving;
     })
     

     this.ss = this.NameDetails.filter(x => x.Saving < 1500).slice(0,10).sort(function(a,b){
      return  a.Saving - b.Saving;
     })
 



      for (var i in res.Top_Saving ) {
        if (res.Top_Saving[i] > 10) {
          console.log(res.Top_Saving[i],"6666"); // {a: 5, b: 6}
        }
      }

    //   var people = [
    //     {
    //         "f_name": "john",
    //         "l_name": "doe",
    //         "sequence": "0",
    //         "title" : "president",
    //         "url" : "google.com",
    //         "color" : "333333",
    //     }
    //     // etc
    // ];
    
    // function sortResults(prop, asc) {
    //     people.sort(function(a, b) {
    //         if (asc) {
    //             return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
    //         } else {
    //             return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    //         }
    //     });
    //     renderResults();
    // }
    
      
     console.log(this.ss)
      // this.TotalSaving = this.NameDetails.filter(d => d.Top_Saving.length > 10);
      console.log(this.TotalSaving)
      setTimeout(() => {
        this.isLoad = false;
      }, 1000);
      
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
