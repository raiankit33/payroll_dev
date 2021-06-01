import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import {Chart} from 'chart.js';
import { AllserviceService } from 'src/app/service/allservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { arrayMax } from 'highcharts';








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
arr = [];
  constructor( private router: Router,
    private Service: AllserviceService,) { }

  ngOnInit(): void {
    this.getSetting();

    
    for(var i =0 ; i< 10;i++){
      this.arr.push(i);
    }

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

    this.Service.showThem().subscribe((res: any) => {
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
 
  tCost =[];
  lCost = [];
  ss :any = [];
  dd :any
  TotalSaving:any = []
  ShowName(event){
    let tt ={
      Batch_Name : event
    }
    this.isLoad =true
    
    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.NameDetails = res.data;
     
this.dd = res.dd
  console.log(this.dd,"sdsdfssggsgs")
 
    
   
     this.TotalSaving = this.NameDetails.filter(x => x.Saving > 1500).slice(0,10).sort(function(a,b){
      return  b.Saving - a.Saving;
     })
     
     this.ss = this.NameDetails.filter(x => x.Saving < 1500).slice(0,10).sort(function(a,b){
      return  a.Saving - b.Saving;
     })
 
      
     this.tCost = this.NameDetails.filter(x => x.Total_COST > 1000).slice(0,10).sort(function(a,b){
      return  b.Total_COST - a.Total_COST;
     })
     
     this.lCost = this.NameDetails.filter(x => x.Total_COST < 1000).slice(0,10).sort(function(a,b){
      return  a.Total_COST - b.Total_COST;
     })



      // for (var i in res.dd ) {
      //   if (res.Top_Saving[i] > 50) {
      //     console.log(res.dd[i],"6666"); // {a: 5, b: 6}
      //   }
      // }

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
    
      
     
      // this.TotalSaving = this.NameDetails.filter(d => d.Top_Saving.length > 10);
  
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
          scales: {
            xAxes: [{
              
              display: false,
              barPercentage: 0.4,
              ticks: {
                max: 3,
              }
            }, {
              display: true,
              ticks: {
                autoSkip: false,
                max: 4,
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
        
      
    });
   
  
    var myChart = new Chart('Chart', {
      type: 'pie',
      data: {
          labels: ['Total Cost', 'Total Markup ', 'Total Tax'],
        
          datasets: [{
             
              data: [this.cost ,this.markup  ,this.tax ],
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
  
 

  
  const mychart = new Chart("yyy", {
    type: 'bar',
    data: {
      labels:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
      ,
      datasets: [{
        label: 'Number of Arrivals',
        data: [3361.88, 1608.495, 354.8675, 2549.75, 2003.12, 2303.0, 1771.1, 2527.77, 683.225, 2411.36, 2952.8, 2257.9375, 2516.375, 3189.12, 2869.5, 2457.44, 2973.1, 1764.663375, 1918.4475, 1869.5, 2215.365, 2982.72, 2206.7675, 327.472, 337.25, 1720.92, 2247.6125, 2911.36, 217.46925, 2296.12375, 1955.8475, 2414.325, 2496.12875, 2773.2, 3034.6125, 2324.28, 1077.87, 2537.683375, 362.0, 1389.5, 2711.03, 2480.8, 2330.74, 2859.64, 2337.2, 501.93875, 2761.5075, 3773.2, 404.975, 3319.4]
        ,
        backgroundColor: 'green',
      }]
    },
    options: {
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 1.3,
          ticks: {
           
          }
        }, {
          display: true,
          ticks: {
            autoSkip: false,
            max: 4,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


  const chart = new Chart("secondHisto", {
    type: 'bar',
    data: {
      labels:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
      ,
      datasets: [{
        label: '',
        data:[638.12, 1891.505, 1645.1325, 950.25, 1496.88, 1197.0, 1728.9, 972.23, 1316.775, 1088.64, 1047.2, 1242.0625, 983.625, 810.88, 1130.5, 1042.56, 1026.9, 1735.336625, 1581.5525, 1130.5, 784.635, 1017.28, 1293.2325, 1672.528, 3662.75, 1279.08, 1252.3875, 1088.64, 1782.53075, 1203.87625, 1544.1525, 1585.675, 1003.87125, 226.8, 965.3875, 1175.72, 1922.13, 1462.316625, 1638.0, 2110.5, 788.97, 1019.2, 1169.26, 1140.36, 1162.8, 1498.06125, 1238.4925, 226.8, 1595.025, 180.6]

        ,
        backgroundColor: 'blue',
      }]
    },
    options: {
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 1.3,
          ticks: {
           
          }
        }, {
          display: true,
          ticks: {
            autoSkip: false,
            max: 4,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
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


      var myChart = new Chart('Bubble', {
        type: 'bubble',
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

      var myChart = new Chart('scatter', {
        type: 'scatter',
        data: {
            labels: ['FEE_TAX', 'FICA_TAX'],
            datasets: [{
               
              data: [ this.FEE_tAX, this.FICA_tAX, ],
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


 
  GOtoForm(){
    this.router.navigate(['dash/form']);
  }


  
}
