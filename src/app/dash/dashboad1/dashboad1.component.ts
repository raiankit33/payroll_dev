import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Chart } from 'chart.js';
import { AllserviceService } from 'src/app/service/allservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { arrayMax } from 'highcharts';
import { SharedData } from 'src/app/Shared/sharedData.service';








@Component({
  selector: 'app-dashboad1',
  templateUrl: './dashboad1.component.html',
  styleUrls: ['./dashboad1.component.css']
})
export class Dashboad1Component implements OnInit {

  Chart = []
  Swordtail: any = [];
  Details = [];
  isLoad: boolean = false
  AllDetail: any = [];

  NameDetails = [];
  error: string;
  Show = []
  hide: boolean = false;
  cost: any;
  saving: any;
  markup: any;
  tax: any;



  Delivery_tAX: any;
  Double_time_Total: any;
  EPLI_tAX: any;
  FEE_tAX: any;
  FICA_med_TAX: any;
  FICA_tAX: any;
  FUI_tol_TAX: any;
  FUI_tAX: any;
  over_time_Total: any
  sUI_tAX: any;
  sales_tAX: any;
  standard_time_Total: any;
  Tech_tAX: any;
  WC_admin_TAX: any;
  WC_tAX: any;
  value: any;
  arr = [];
  constructor(private router: Router,
    private Service: AllserviceService,
    private shared: SharedData,) { }

  ngOnInit(): void {
    this.getSetting();




  }


  form = new FormGroup({

    id: new FormControl(''),
  })

  sum = []







  refresh() {
    location.reload();
  }

  clickMe() {
    this.router.navigate(['dash/form']);
  }


  getSetting() {

    this.Service.showThem().subscribe((res: any) => {
      this.Details = res.dic;



       var length  =  this.Details.length;
      this.ShowName(this.Details[length - 1].Batch_Name);
      
    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }




  plot = [];
  histo = []
  highestCost = [];
  leastCost = [];
  leastSaving: any = [];
  dd: any
  highestSaving: any = []
  Department: any ;
  manager  :any = [];
  agency : any = [];

  ShowName(event) {
    let tt = {
      Batch_Name: event
    }
    console.log(event,"first load")
    this.isLoad = true
  
    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.NameDetails = res.data;

     
      this.plot = res.data;
      this.dd = res.dd

      const unique = [];
      const Dept = [];
      const vendor = [];
 
 this.NameDetails.map(x => unique.filter(a =>  a.Worker_Manager == x.Worker_Manager).length > 0 ? null : unique.push(x));
   this.manager = unique ;
console.log(unique,",,,,,");

this.NameDetails.map(y => Dept.filter(b =>  b.Worker_Department == y.Worker_Department).length > 0 ? null : Dept.push(y));
   this.Department = Dept ;
console.log(Dept,",,,,,");

this.NameDetails.map(z => vendor.filter(a =>  a.Worker_Agency == z.Worker_Agency).length > 0 ? null : vendor.push(z));
   this.agency = vendor ;
console.log(vendor,",,,,,");
    
  
  
      this.highestSaving = res.Top_highest_Saving;
   

      this.leastSaving = res.Top_lowest_Saving;


      this.highestCost = res.Top_highest_Cost;

      this.leastCost = res.Top_lowest_Cost;



      // for (var i in res.dd ) {
      //   if (res.Top_Saving[i] > 50) {
      //     console.log(res.dd[i],"6666"); // {a: 5, b: 6}
      //   }
      // }




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
      this.FEE_tAX = res.FEE_TAX;
      this.FICA_med_TAX = res.FICA_Med_TAX;
      this.FICA_tAX = res.FICA_TAX;
      this.FUI_tol_TAX = res.FUI_Sol_TAX;
      this.FUI_tAX = res.FUI_TAX;
      this.over_time_Total = res.Over_Time_Total;
      this.sUI_tAX = res.SUI_TAX;
      this.sales_tAX = res.Sales_TAX;
      this.standard_time_Total = res.Standard_Time_Total;
      this.Tech_tAX = res.Tech_TAX;
      this.WC_admin_TAX = res.WC_Admin_TAX;
      this.WC_tAX = res.WC_TAX;


      var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: ['WC TAX', 'SUI TAX', 'FUI Tax', 'Tech_tAX', 'WC_admin_TAX', 'FEE_tAX', 'FICA_med_TAX', 'EPLI_tAX'],
          datasets: [{
            label: '',

            data: [this.WC_tAX, this.sUI_tAX, this.FUI_tAX, this.FEE_tAX, this.Delivery_tAX, this.Tech_tAX, this.WC_admin_TAX,
            this.FEE_tAX, this.FICA_med_TAX, this.EPLI_tAX],
            fill: true,

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(54, 162, 235)',
              'rgb(54, 12, 235)',
              'rgb(54, 162, 35)',
              'rgb(255, 205, 86)',
              'rgb(255, 99, 132)',

            ],
            borderWidth: 3
          }



          ]
        },
        options: {
          
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Taxes'
              },

              display: false,
              barPercentage: 0.9,
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
              scaleLabel: {
                display: true,
                labelString: 'Taxes'
              }
            }]
          }
        }


      });


      var myChart = new Chart('Chart', {
        type: 'pie',
        data: {
          labels: ['Double time Total', 'over time Total ', 'standard time Total'],

          datasets: [{

            data: [this.Double_time_Total, this.over_time_Total, this.standard_time_Total],
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
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
          ,
          datasets: [{
            label: 'Savings',
            data: [3361.88, 1608.495, 354.8675, 2549.75, 2003.12, 2303.0, 1771.1, 2527.77, 683.225, 2411.36, 2952.8, 2257.9375, 2516.375, 3189.12, 2869.5, 2457.44, 2973.1, 1764.663375, 1918.4475, 1869.5, 2215.365, 2982.72, 2206.7675, 327.472, 337.25, 1720.92, 2247.6125, 2911.36, 217.46925, 2296.12375, 1955.8475, 2414.325, 2496.12875, 2773.2, 3034.6125, 2324.28, 1077.87, 2537.683375, 362.0, 1389.5, 2711.03, 2480.8, 2330.74, 2859.64, 2337.2, 501.93875, 2761.5075, 3773.2, 404.975, 3319.4]
            ,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'black',
            borderWidth: 1,
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

              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Saving'
              }
            }]
          }
        }
      });


      const chart = new Chart("secondHisto", {
        type: 'bar',
        data: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
          ,
          datasets: [{
            label: 'Costs',
            data: [638.12, 1891.505, 1645.1325, 950.25, 1496.88, 1197.0, 1728.9, 972.23, 1316.775, 1088.64, 1047.2, 1242.0625, 983.625, 810.88, 1130.5, 1042.56, 1026.9, 1735.336625, 1581.5525, 1130.5, 784.635, 1017.28, 1293.2325, 1672.528, 3662.75, 1279.08, 1252.3875, 1088.64, 1782.53075, 1203.87625, 1544.1525, 1585.675, 1003.87125, 226.8, 965.3875, 1175.72, 1922.13, 1462.316625, 1638.0, 2110.5, 788.97, 1019.2, 1169.26, 1140.36, 1162.8, 1498.06125, 1238.4925, 226.8, 1595.025, 180.6]

            ,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'black',
            borderWidth: 1
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

              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Cost '
              }
            }]
          }
        }
      });



      var myChart = new Chart('Bubble', {
        type: 'bubble',
        data: {
          labels: ['FEE_TAX', 'FICA_TAX', 'Sales_TAX', 'Delivery_TAX', 'EPLI_TAX', 'FUI_Sol_TAX', 'FICA_Med_TAX', 'Tech_TAX'],
          datasets: [{

            data: [
              { x: 10, y: 10, r: 10 },
              { x: 15, y: 5, r: 15 },
              { x: 26, y: 12, r: 23 },
              { x: 7, y: 8, r: 8 },

            ],
            fill: false,

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(25, 205, 86)',
              'rgb(255, 205, 6)',
              'rgb(25, 205, 86)',
              'rgb(255, 205, 8)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
            ],
            borderWidth: 9
          }

          ]
        },
        options: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Range'
            }
          }]

        }
      });

      var myChart = new Chart('scatter', {
        type: 'scatter',
        data: {
          labels: [],
          datasets: [{

            data: [this.plot],
            fill: false,

            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(25, 205, 86)',
              'rgb(255, 205, 6)',
              'rgb(25, 205, 86)',
              'rgb(255, 205, 8)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
            ],
            borderWidth: 9
          }

          ]
        },
        options: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Range'
            }
          }]
        }
      });
    })
  }


  sendData(event) {
    // this.shared.updateSharedData(d);
    console.log(event)
    this.router.navigate(['dash/employeeDetails',{'Worker_Id':event}]);
  }




  GOtoForm() {
    this.router.navigate(['dash/form']);
  }


  selectDate(event) {
    console.log(event)

  }


  selectVendor(event) {
    console.log(event)
  }

  selectDepartment(event) {
    console.log(event)

  }

  managerDetails : any =[];

  selectManager(event) {
    
    const m = {
      Manager : event,
      data  : this.NameDetails
    }
    console.log(m)
    this.Service.getManager(m).subscribe((res:any)=>{
      this.managerDetails = res.data
     console.log(res)
      console.log(this.managerDetails,"manager")
    })

  }


 

  

}
