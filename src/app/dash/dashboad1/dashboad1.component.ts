import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { Chart } from 'chart.js';
import { AllserviceService } from 'src/app/service/allservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { arrayMax } from 'highcharts';
import { SharedData } from 'src/app/Shared/sharedData.service';
import {  formatDate } from "@angular/common";







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
  vendorDetails :any = [];
  error: string;
  Show = []
  hide: boolean = false;
  cost: any;
  saving: any;
  markup: any;
  tax: any;
  isManger: boolean = false;
  isDepartment: boolean = false;

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
  post: any;
  user: any;
  Worker_Agency: any;
  stackSaving: any;
  stackcost: any;
  constructor(private router: Router,
    private Service: AllserviceService,
    private shared: SharedData,) {
    }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getSetting();
  
    this.form.get('start_date').patchValue(this.formatDate(new Date()));
  }

  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to description
    search: true,
    limitTo: 0,
  };

  form = new FormGroup({

    id: new FormControl(''),
    // start_date:[formatDate(this.post.start_date,'MM-DD-YY','en'), [Validators.required]],
     start_date:new FormControl(''),
   end_date: new FormControl('',[Validators.required]),

  })

 

 
  sum = []







  refresh() {
    location.reload();
  }

  clickMe() {
    this.router.navigate(['dash/form']);
  }


  getSetting() {
    let tt ={
      user_id : this.user.id,
     
    }

    this.Service.showThem(tt).subscribe((res: any) => {
      this.Details = res.dic;
console.log(this.Details)


      var length = this.Details.length;
      this.ShowName(this.Details[length - 1].id);

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
  Department: any;
  manager: any = [];
  agency: any = [];
 state : any = [];
  job_type : any = [];
  locationType : any = [];
stackBar : any = [];
  ShowName(event) {
    
    let tt = {
      id: event,
      user_id : this.user.id
    }
    console.log(event, "first load")
    this.isLoad = true

    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.NameDetails = res.data;


      this.plot = res.data;
      this.dd = res.dd

    
      const unique = [];
      const Dept = [];
      const vendor = [];
      const states = [];

      this.NameDetails.map(x => unique.filter(a => a.name == x.Worker_Manager).length > 0 ? null : unique.push({'name':x.Worker_Manager}));
      this.manager = unique;


      this.NameDetails.map(y => Dept.filter(b => b.name == y.Worker_Department).length > 0 ? null : Dept.push({'name':y.Worker_Department}));
      this.Department = Dept;


      this.NameDetails.map(z => vendor.filter(c => c.name == z.Worker_Agency).length > 0 ? null : vendor.push({'name':z.Worker_Agency}));
      this.agency = vendor; 

      this.NameDetails.map(i => states.filter(d => d.name == i.Work_State).length > 0 ? null : states.push({'name':i.Work_State}));
      this.state = states;


      this.job_type = res.Title_saving.slice(0,10) ;
      this.locationType = res.location_saving;


      this.highestSaving = res.Top_highest_Saving;


      this.leastSaving = res.Top_lowest_Saving;


      this.highestCost = res.Top_highest_Cost;

      this.leastCost = res.Top_lowest_Cost;

this.Worker_Agency  = res.chart.Worker_Agency 
this.stackSaving = res.chart.saving 
this.stackcost= res.chart.Cost 


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

      this.barChart();
      this.pieChart();
      this.histogramChart();
      this.histogramSecondChart();
      this.bubbleChart();
      this.scatterChart();

    })
  }

  barChart(){
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['FICA_TAX','FICA_Med_TAX','FEE_TAX','EPLI_TAX','Delivery_TAX','FUI_Sol_TAX','FUI_TAX','SUI_TAX',
          'Sales_TAX','WC_Admin_TAX','Tech_TAX','FUI_Sol_TAX'],
          datasets: [{
              label:'',
              data: [  this.FICA_tAX, this.FICA_med_TAX , this.FEE_tAX, this.EPLI_tAX , 
                this.Delivery_tAX , this.FUI_tol_TAX ,this.FUI_tAX , this.sUI_tAX , this.sales_tAX ,
                 this.WC_admin_TAX , this.Tech_tAX , this.FUI_tol_TAX  ],
              fill: true,
          
           backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 12, 235)',
            'rgb(25, 66, 68)',
            'rgb(25, 99, 132)',
            'rgb(54, 162, 25)',
            'rgb(255, 205, 86)',
            'rgb(25, 99, 132)',
            'rgb(54, 162, 83)',
            'rgb(255, 25, 86)',
            'rgb(255, 93, 12)',
            'rgb(54, 162, 23)',
            'rgb(255, 25, 8)',
      
              ],
              borderColor : "white",
                
          

              borderWidth: 3
          }
    
        
        
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
            display: false,
            barPercentage: 0.9,
            ticks: {

            }
          },{
            scaleLabel: {
              display: true,
              labelString: ' Types of Taxes '
            }
          }, {
            display: false,
            ticks: {
              autoSkip: false,

            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: ' Taxes in Dollar '
            }
          }]
        }
      }
      
    
  });
  }

 
  barBChart(){
    var myChart = new Chart('BChart', {
      type: 'bar',
      data: {
          labels: ['Stack Cost'],
          datasets: [
            {
              label:'data 1',
              data: [  this.stackcost  ],
              fill: true,
          
           backgroundColor: [
            'rgba(102, 255, 102,0.7)',
     
      
              ],
              borderColor :[
                'rgb(102, 255, 102)',
           
          
              ],
              borderWidth: 3
          },
          {
            label:'data 2',
            data: [  this.stackSaving  ],
            fill: true,
        
         backgroundColor: [
          'rgba(102, 255, 10,0.7)',
   
    
            ],
            borderColor :[
              'rgb(102, 25, 102)',
         
        
            ],
            borderWidth: 3
        }
  
    
        
        
        ]
      },
      options: {
      
      }
      
    
  });
  }



  pieChart(){
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
  }

  histogramChart(){
    const mychart = new Chart("yyy", {
      type: 'bar',
      data: {
        labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, , 44, 46, 48, 50]
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
          xAxes: [
            {
            display: false,
            barPercentage: 1.3,
            ticks: {
  
            }
          },{
            scaleLabel: {
              display: true,
              labelString: ' No of Employee '
            }
          }, {
            display: false,
            ticks: {
              autoSkip: false,
  
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: ' Savings '
            }
          }]
        }
      }
    });
  }

  histogramSecondChart(){
    const chart = new Chart("secondHisto", {
      type: 'bar',
      data: {
        labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, , 44, 46, 48, 50]
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
          xAxes: [
            {
            display: false,
            barPercentage: 1.3,
            ticks: {
  
            }
          },{
            scaleLabel: {
              display: true,
              labelString: ' No of Employee '
            }
          }, {
            display: false,
            ticks: {
              autoSkip: false,
  
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: ' Costs '
            }
          }]
        }
      }
    });
  }

  bubbleChart(){
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
  }
 

  scatterChart(){
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
  }


  sendData(event) {
    this.shared.dashboadData(this.NameDetails);
   
   
    this.router.navigate(['dash/employeeDetails', { 'Worker': event }]);
  }




  GOtoForm() {
    this.router.navigate(['dash/form']);
  }


  dateRange :any = [];

  private formatDate(date){
    const d = new Date(date) ;
    let month = ''+ (d.getMonth() + 1);
    let day = '' + d.getDate();
   const year = d.getFullYear();
   if(month.length < 2 )month = '0' + month ;
     if(day.length <2 ) day = '0' + day ;
     return [month, day , year].join('-');
  }


  selectDate() {
  
    var date = {
        Week_Start_Date : this.formatDate(this.form.value.start_date),
        Week_End_Date : this.formatDate(this.form.value.end_date),
        data : this.NameDetails,
        user_id : this.user.id

    }
  


 this.Service.getDate(date).subscribe( (res:any)=>{
     this.dateRange = res.date


     
     this.job_type = res.Title_saving;
     this.locationType = res.location_saving;

     this.highestSaving = res.Top_highest_Saving;
     this.leastSaving = res.Top_lowest_Saving ;
     this.highestCost = res.Top_highest_Cost;
     this.leastCost = res.Top_lowest_Cost ;

     this.cost = res.T_Cost;
     this.markup = res.T_Markup;
     this.tax = res.T_Tax;
     this.saving = res.T_Saving;
     this.EPLI_tAX = res.EPLI_TAX;
     this.FEE_tAX = res.FEE_TAX;
     this.FICA_med_TAX = res.FICA_Med_TAX;
     this.FICA_tAX = res.FICA_TAX;
     this.FUI_tol_TAX = res.FUI_Sol_TAX;
     this.FUI_tAX = res.FUI_TAX;
     this.over_time_Total = res.Over_Time_Total;
     this.sUI_tAX = res.SUI_TAX;
     this.Tech_tAX = res.Tech_TAX;
     this.WC_admin_TAX = res.WC_Admin_TAX;
     this.WC_tAX = res.WC_TAX;
 })
  }

  isVendor : boolean = false ;

  selectVendor(event) {
    console.log(event)
    const v = {
      Worker_Agency: event,
      data: this.NameDetails,
      user_id : this.user.id
    }
    console.log(v)
    this.isVendor = true;
    this.Service.getVendor(v).subscribe((res: any) => {
      this.vendorDetails = res.data;


      this.job_type = res.Title_saving;
      this.locationType = res.location_saving;

      this.highestSaving = res.Top_highest_Saving;
      this.leastSaving = res.Top_lowest_Saving ;
      this.highestCost = res.Top_highest_Cost;
      this.leastCost = res.Top_lowest_Cost ;

console.log(this.vendorDetails)
      this.cost = res.T_Cost;
      this.markup = res.T_Markup;
      this.tax = res.T_Tax;
      this.saving = res.T_Saving;
      this.EPLI_tAX = res.EPLI_TAX;
      this.FEE_tAX = res.FEE_TAX;
      this.FICA_med_TAX = res.FICA_Med_TAX;
      this.FICA_tAX = res.FICA_TAX;
      this.FUI_tol_TAX = res.FUI_Sol_TAX;
      this.FUI_tAX = res.FUI_TAX;
      this.over_time_Total = res.Over_Time_Total;
      this.sUI_tAX = res.SUI_TAX;
      this.Tech_tAX = res.Tech_TAX;
      this.WC_admin_TAX = res.WC_Admin_TAX;
      this.WC_tAX = res.WC_TAX;

      this.barChart();
this.pieChart();
      setTimeout(() => {
        this.isVendor = false;
      }, 1000);


    })

  }

  selectDepartment(event) {
    console.log(event)
    const m = {
      Worker_Department: event,
      data: this.NameDetails,
      user_id : this.user.id
    }
    console.log(m)
    this.isDepartment = true;
    this.Service.getDepartment(m).subscribe((res: any) => {
      this.managerDetails = res.data;

      this.job_type = res.Title_saving;
      this.locationType = res.location_saving;

      this.highestSaving = res.Top_highest_Saving;
      this.leastSaving = res.Top_lowest_Saving ;
      this.highestCost = res.Top_highest_Cost;
      this.leastCost = res.Top_lowest_Cost ;

      this.cost = res.T_Cost;
      this.markup = res.T_Markup;
      this.tax = res.T_Tax;
      this.saving = res.T_Saving;
      this.EPLI_tAX = res.EPLI_TAX;
      this.FEE_tAX = res.FEE_TAX;
      this.FICA_med_TAX = res.FICA_Med_TAX;
      this.FICA_tAX = res.FICA_TAX;
      this.FUI_tol_TAX = res.FUI_Sol_TAX;
      this.FUI_tAX = res.FUI_TAX;
      this.over_time_Total = res.Over_Time_Total;
      this.sUI_tAX = res.SUI_TAX;
      this.Tech_tAX = res.Tech_TAX;
      this.WC_admin_TAX = res.WC_Admin_TAX;
      this.WC_tAX = res.WC_TAX;

      this.barChart();
      this.pieChart();

      setTimeout(() => {
        this.isDepartment = false;
      }, 1000);

      console.log(this.managerDetails, "manager")
    })


  }

  managerDetails: any = [];

  selectManager(event) {
    console.log('select manager',event);
    const m = {
      Manager: event,
      data: this.NameDetails,
      user_id : this.user.id
    }
    console.log(m)
    this.isManger = true;
    this.Service.getManager(m).subscribe((res: any) => {
      this.managerDetails = res.data;

      this.job_type = res.Title_saving;
      this.locationType = res.location_saving;

      this.highestSaving = res.Top_highest_Saving;
      this.leastSaving = res.Top_lowest_Saving ;
      this.highestCost = res.Top_highest_Cost;
      this.leastCost = res.Top_lowest_Cost ;
console.log(res)
      this.cost = res.T_Cost;
      this.markup = res.T_Markup;
      this.tax = res.T_Tax;
      this.saving = res.T_Saving;
      this.EPLI_tAX = res.EPLI_TAX;
      this.FEE_tAX = res.FEE_TAX;
      this.FICA_med_TAX = res.FICA_Med_TAX;
      this.FICA_tAX = res.FICA_TAX;
      this.FUI_tol_TAX = res.FUI_Sol_TAX;
      this.FUI_tAX = res.FUI_TAX;
      this.over_time_Total = res.Over_Time_Total;
      this.sUI_tAX = res.SUI_TAX;
      this.Tech_tAX = res.Tech_TAX;
      this.WC_admin_TAX = res.WC_Admin_TAX;
      this.WC_tAX = res.WC_TAX;

      this.barChart();
this.pieChart();
      setTimeout(() => {
        this.isManger = false;
      }, 1000);


    })

  }

  selectState(event){
    
      console.log('select manager',event);
      const m = {
        Work_State: event,
        data: this.NameDetails,
        user_id : this.user.id
      }
      console.log(m)
      this.isManger = true;
      this.Service.getState(m).subscribe((res: any) => {
        this.managerDetails = res.data;
  
        this.job_type = res.Title_saving;
        this.locationType = res.location_saving;
  
        this.highestSaving = res.Top_highest_Saving;
        this.leastSaving = res.Top_lowest_Saving ;
        this.highestCost = res.Top_highest_Cost;
        this.leastCost = res.Top_lowest_Cost ;
  console.log(res)
        this.cost = res.T_Cost;
        this.markup = res.T_Markup;
        this.tax = res.T_Tax;
        this.saving = res.T_Saving;
        this.EPLI_tAX = res.EPLI_TAX;
        this.FEE_tAX = res.FEE_TAX;
        this.FICA_med_TAX = res.FICA_Med_TAX;
        this.FICA_tAX = res.FICA_TAX;
        this.FUI_tol_TAX = res.FUI_Sol_TAX;
        this.FUI_tAX = res.FUI_TAX;
        this.over_time_Total = res.Over_Time_Total;
        this.sUI_tAX = res.SUI_TAX;
        this.Tech_tAX = res.Tech_TAX;
        this.WC_admin_TAX = res.WC_Admin_TAX;
        this.WC_tAX = res.WC_TAX;
  
        this.barChart();
  this.pieChart();
        setTimeout(() => {
          this.isManger = false;
        }, 1000);
  
  
      })
  
    }
  




}
