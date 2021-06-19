import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private actRouter: ActivatedRoute,
    private shared: SharedData,) {
    }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getSetting();

  this.actRouter.paramMap.subscribe(params => {
    console.log("parammap",params.get('Batch'));
    // console.log("paramma2",JSON.parse( params.get('data')));
    var Batch = params.get('Batch');
   

    if(Batch != undefined && Batch != ""   ){
      this.ShowName(Batch);
    
    }
    else{
      this.ShowName("")
    }
  })
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

  uploadPage(){
    this.router.navigate(['dash/dashboad']);
  }

 
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

getField(input , field){
  var output = [];
  for(var i = 0 ; i <input.length ; i++){
output.push(input[i][field])
return output
  }
  console.log(output,'out')
  
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

  stackName = []
stackBar : any = [];
stackTax = [];
stackMarkup
     stackPay = []

     stackManagerName = [];
     stackManagerTax = [];
     stackManagerPay = [];
     stackManagerMarkup = [];

//
stackDepartmentName = [];
     stackDepartmentTax = [];
     stackDepartmentPay = [];
     stackDepartmentMarkup = [];
//
     stackLocationState = [];
     stackLocationTax = [];
     stackLocationPay = [];
     stackLocationMarkup = [];

  ShowName(Batch) {
    
    let tt = {
      id: Batch,
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

    
    //   for(var item of res.chart){
    //      this.stackTax.push(item.Taxes)
    //      this.stackPay.push(item.Pay)
    //  console.log(this.stackTax)
    //   }

    this.stackTax = res.chart.map(a =>a.Taxes)
    console.log(this.stackTax)
     
    this.stackName = res.chart.map(b =>b.Worker_Agency)
    this.stackPay = res.chart.map(b =>b.Pay)
    this.stackPay = res.chart.map(b =>b.Pay)
    this.stackMarkup = res.chart.map(b =>b.Markup)

    this.stackDepartmentName = res.chart_Department.map(x =>x.Worker_Department)
    this.stackDepartmentTax = res.chart_Department.map(x =>x.Taxes)
    this.stackDepartmentPay = res.chart_Department.map(y =>y.Pay)
    this.stackDepartmentMarkup = res.chart_Department.map(y =>y.Markup)

    //manager
    this.stackManagerName = res.chart_Manager.map(l =>l.Worker_Manager)
    this.stackManagerTax = res.chart_Manager.map(l =>l.Taxes)
    this.stackManagerPay = res.chart_Manager.map(m =>m.Pay)
    this.stackManagerMarkup = res.chart_Manager.map(m =>m.Markup)

    //location
    this.stackLocationState = res.location_saving.map(l =>l.State)
    this.stackLocationTax = res.location_saving.map(l =>l.Taxes)
    this.stackLocationPay = res.location_saving.map(m =>m.Pay)
    this.stackLocationMarkup = res.location_saving.map(m =>m.Markup)
   

      this.job_type = res.Title_saving.slice(0,10) ;
      this.locationType = res.location_saving;


      this.highestSaving = res.Top_highest_Saving;


      this.leastSaving = res.Top_lowest_Saving;


      this.highestCost = res.Top_highest_Cost;

      this.leastCost = res.Top_lowest_Cost;

this.Worker_Agency  = res.chart.Worker_Agency 
this.stackSaving = res.chart.saving 
this.stackcost= res.chart.Cost 


  




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
      this.Stack();
this.barBChart();
    })
  }

  barChart(){
  //   var myChart = new Chart('myChart', {
  //     type: 'bar',
  //     data: {
  //         labels: ['FICA TAX','FICA MED TAX','FEE TAX','EPLI TAX','DELIVERY TAX','FUI SOL TAX','FUI TAX','SUI TAX',
  //         'SALES TAX','WC ADMIN_TAX','TECH TAX','FUI SOL TAX'],
  //         datasets: [{
  //             label:'',
  //             data: [  this.FICA_tAX, this.FICA_med_TAX , this.FEE_tAX, this.EPLI_tAX , 
  //               this.Delivery_tAX , this.FUI_tol_TAX ,this.FUI_tAX , this.sUI_tAX , this.sales_tAX ,
  //                this.WC_admin_TAX , this.Tech_tAX , this.FUI_tol_TAX  ],
  //             fill: true,
          
  //          backgroundColor: [
  //           'rgb(255, 99, 132)',
  //           'rgb(54, 12, 235)',
  //           'rgb(25, 66, 68)',
  //           'rgb(25, 99, 132)',
  //           'rgb(54, 162, 25)',
  //           'rgb(255, 205, 86)',
  //           'rgb(25, 99, 132)',
  //           'rgb(54, 162, 83)',
  //           'rgb(255, 25, 86)',
  //           'rgb(255, 93, 12)',
  //           'rgb(54, 162, 23)',
  //           'rgb(255, 25, 8)',
      
  //             ],
  //             borderColor : "white",
                
          

  //             borderWidth: 3
  //         }
    
        
        
  //       ]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [
  //           {
  //           display: false,
  //           barPercentage: 0.9,
  //           ticks: {

  //           }
  //         },{
  //           scaleLabel: {
  //             display: true,
  //             labelString: ' Types of Taxes '
  //           }
  //         }, {
  //           display: false,
  //           ticks: {
  //             autoSkip: false,

  //           }
  //         }],
  //         yAxes: [{
  //           scaleLabel: {
  //             display: true,
  //             labelString: ' Taxes in Dollar '
  //           }
  //         }]
  //       }
  //     },

    
  // });



  var chartData = {
    labels: ['FICA TAX','FICA MED TAX','FEE TAX','EPLI TAX','DELIVERY TAX','FUI SOL TAX','FUI TAX','SUI TAX',
          'SALES TAX','WC ADMIN_TAX','TECH TAX','FUI SOL TAX'],
        datasets: [
            {
                fillColor: "#79D1CF",
                strokeColor: "#79D1CF",
                data: [  this.FICA_tAX, this.FICA_med_TAX , this.FEE_tAX, this.EPLI_tAX , 
                  this.Delivery_tAX , this.FUI_tol_TAX ,this.FUI_tAX , this.sUI_tAX , this.sales_tAX ,
                   this.WC_admin_TAX , this.Tech_tAX , this.FUI_tol_TAX  ],
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
            }
        ]
    };

var opt = {
    events: false,
    tooltips: {
        enabled: false
    },
    hover: {
        animationDuration: 0
    },
    animation: {
        duration: 1,
        onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];                            
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
            });
        }
    }
};
 var ctx = document.getElementById("myChart"),
     myLineChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: opt
     });

  }


  Stack(){
    var chartData = {
      labels: ['PAY','TAXES','MARKUP'],
      // labels: [this.stackDepartmentName[0],this.stackDepartmentName[1],this.stackDepartmentName[2]],
          datasets: [
              {
                  fillColor: "#79D1CF",
                  strokeColor: "#79D1CF",
                  label:'data 1',
                  data:  [ this.stackLocationPay[0],this.stackLocationPay[1] ,this.stackLocationPay[2]],
              
              
                     backgroundColor: 
                                'rgb(255, 99, 182)',
              },
              {
                fillColor: "#79D1CF",
                strokeColor: "#79D1CF",
                label:'data 2',
                data: [ this.stackLocationTax[0],this.stackLocationTax[1],this.stackLocationTax[2]],
            
            
                   backgroundColor: 
                              'rgb(25, 99, 132)', 
            },
            {
              fillColor: "#79D1CF",
              strokeColor: "#79D1CF",
              label:'data 3',
              data: [ this.stackLocationMarkup[0],this.stackLocationMarkup[1],this.stackLocationMarkup[2]],
          
          
                 backgroundColor: 
                            'rgb(255, 929, 132)',  
          },
  
          ]
      };
  
  var opt = {
      events: false,
      tooltips: {
          enabled: false
      },
      scales:{
        xAxes:[{
          stacked :true
         },//{ scaleLabel: {
                  
        //  } 
       // },
       {
         display: false,
                   ticks: {
                     autoSkip: true,
       
                   } }],
        yAxes:[{
          stacked :true
        }]
      },
      hover: {
          animationDuration: 0
      },
      animation: {
          duration: 1,
          onComplete: function () {
              var chartInstance = this.chart,
                  ctx = chartInstance.ctx;
              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'center';
  
              this.data.datasets.forEach(function (dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function (bar, index) {
                      var data = dataset.data[index];                            
                      ctx.fillText(data, bar._model.x, bar._model.y - 5);
                  });
              });
          }
      }
  };
   var ctx = document.getElementById("bubble"),
       myLineChart = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: opt
       });
  }
 
  barBChart(){
  //   var myChart = new Chart('BChart', {
  //     type: 'bar',
  //     data: {
  //         labels: ['Stack Cost','Stack Cost','Stack Cost'],
  //         datasets: [
  //           {
  //             label:'data 1',
  //             data: [ this.stackPay[0],this.stackTax[0]],
  //             fill: true,
          
  //          backgroundColor: 
  //           'rgb(255, 99, 132)',
         
          

  //             borderColor :[
               
          
  //             ],
  //             borderWidth: 3
  //         },
  //         {
  //           label:'data 2',
  //           data: [this.stackPay[1], this.stackTax[1]],
  //           fill: true,
        
  //        backgroundColor:   'rgb(54, 162, 235)',
      
        
            
  //           borderColor :[
            
         
        
  //           ],
  //           borderWidth: 3
  //       },
  //       {
  //         label:'data 3',
  //         data: [this.stackPay[3], this.stackTax[3]],
  //         fill: true,
      
  //      backgroundColor:     'rgb(255, 99, 12)',
  
    
  //         borderColor :[
          
       
      
  //         ],
  //         borderWidth: 3
  //     },
  //     {
  //       label:'data 4',
  //       data: [this.stackPay[4], this.stackTax[4]],
  //       fill: true,
    
  //    backgroundColor:   'rgb(255, 205, 86)',

    
    
  //       borderColor :[
        
     
    
  //       ],
  //       borderWidth: 3
  //   },
 
   
    
        
        
  //       ]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [ {
  // stacked : true
  //         },
  //           {
  //           display: false,
  //           barPercentage: 1.2,
  //           ticks: {

  //           }
  //         },{
  //           scaleLabel: {
  //             display: true,
  //             labelString: ' Types of Taxes '
  //           }
  //         }, {
  //           display: false,
  //           ticks: {
  //             autoSkip: false,

  //           }
  //         }],
  //         yAxes: [{
  // stacked : true
  //         },
            
  //           {
  //           scaleLabel: {
            
  //             display: true,
  //             labelString: ' Taxes in Dollar '
  //           }
  //         }]
  //       }
  //     }
      
    
  // });


  var chartData = {
    labels: ['PAY','TAXES'],
    // labels: [this.stackName[0],this.stackName[1],this.stackName[2]],
        datasets: [
            {
                fillColor: "#79D1CF",
                strokeColor: "#79D1CF",
                label:'data 1',
                data: [ this.stackPay[0],this.stackPay[1],this.stackPay[2]],
            
            
                   backgroundColor: 
                              'rgb(255, 99, 82)',
            },
            {
              fillColor: "#79D1CF",
              strokeColor: "#79D1CF",
              label:'data 2',
              data: [this.stackTax[0], this.stackTax[1],this.stackTax[2]],
          
          
                 backgroundColor: 
                            'rgb(25, 199, 152)', 
          },
          {
            fillColor: "#79D1CF",
            strokeColor: "#79D1CF",
            label:'data 3',
            data: [this.stackMarkup[0], this.stackMarkup[1],this.stackMarkup[2]],
        
        
               backgroundColor: 
                          'rgb(255, 92, 13)',  
        },
        {
          fillColor: "#79D1CF",
          strokeColor: "#79D1CF",
          label:'data 4',
        data: [this.stackPay[4], this.stackTax[4]],
      
      
             backgroundColor: 
                        'rgb(255, 29, 105)',  
      },
        ]
    };

var opt = {
    events: false,
    tooltips: {
        enabled: false
    },
    scales:{
      xAxes:[{
        stacked :true
       
      },{
       display: false,
                 ticks: {
                   autoSkip: true,
     
                 } }],
      yAxes:[{
        stacked :true
      }]
    },
    hover: {
        animationDuration: 0
    },
    animation: {
        duration: 1,
        onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'center';

            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];                            
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
            });
        }
    }
};
 var ctx = document.getElementById("BChart"),
     myLineChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: opt
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


    

//   var chartData = {
//      labels: ['Double time Total', 'over time Total ', 'standard time Total'],
//         datasets: [
//             {
//                 fillColor: "#79D1CF",
//                 strokeColor: "#79D1CF",
//                 data: [this.Double_time_Total, this.over_time_Total, this.standard_time_Total],
//                    backgroundColor: [
//                     'rgb(255, 99, 132)',
//                         'rgb(54, 162, 235)',
//                       'rgb(255, 205, 86)'
//                                 ],
//             }
//         ]
//     };

// var opt = {
//     events: false,
//     tooltips: {
//         enabled: false
//     },
//     hover: {
//         animationDuration: 0
//     },
//     animation: {
//         duration: 1,
//         onComplete: function () {
//             var chartInstance = this.chart,
//                 ctx = chartInstance.ctx;
//             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
//             ctx.textAlign = 'justify';
//             ctx.textBaseline = 'bottom';

//             this.data.datasets.forEach(function (dataset, i) {
//                 var meta = chartInstance.controller.getDatasetMeta(i);
//                 meta.data.forEach(function (pie, index) {
//                     var data = dataset.data[index];                            
//                     ctx.fillText(data, pie._model.x, pie._model.y - 5);
//                 });
//             });
//         }
//     }
// };
//  var ctx = document.getElementById("Chart"),
//      myLineChart = new Chart(ctx, {
//         type: 'pie',
//         data: chartData,
//         options: opt
//      });

  
  }

  histogramChart(){
  //   var myChart = new Chart('stack2', {
  //     type: 'bar',
  //     data: {
  //         labels: ['Stack Cost','Stack Cost','Stack Cost'],
  //         datasets: [
  //           {
  //             label:'data 1',
  //             data: [ this.stackManagerPay[0],this.stackManagerTax[0]],
  //             fill: true,
          
  //          backgroundColor: 
  //           'rgb(255, 99, 132)',
         
          

  //             borderColor :[
               
          
  //             ],
  //             borderWidth: 3
  //         },
  //         {
  //           label:'data 2',
  //           data: [ this.stackManagerPay[1],this.stackManagerTax[1]],
  //           fill: true,
        
  //        backgroundColor:   'rgb(54, 162, 235)',
      
        
            
  //           borderColor :[
            
         
        
  //           ],
  //           borderWidth: 3
  //       },
  //       {
  //         label:'data 3',
  //         data: [ this.stackManagerPay[3],this.stackManagerTax[3]],
  //         fill: true,
      
  //      backgroundColor:     'rgb(255, 99, 12)',
  
    
  //         borderColor :[
          
       
      
  //         ],
  //         borderWidth: 3
  //     },
  //     {
  //       label:'data 4',
  //       data: [ this.stackManagerPay[4],this.stackManagerTax[4]],
  //       fill: true,
    
  //    backgroundColor:   'rgb(255, 205, 86)',

    
    
  //       borderColor :[
        
     
    
  //       ],
  //       borderWidth: 3
  //   },
 
   
    
        
        
  //       ]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [ {
  // stacked : true
  //         },
     
  //         ],
  //         yAxes: [{
  // stacked : true
  //         },
            
         
  //         ]
  //       }
  //     }
      
    
  // });


  var chartData = {
    labels: [this.stackManagerName[0],this.stackManagerName[1],this.stackManagerName[2],],
        datasets: [
            {
                fillColor: "#79D1CF",
                strokeColor: "#79D1CF",
                label :"Data 1",
                data:  [ this.stackManagerPay[0],this.stackManagerPay[1],this.stackManagerPay[2]],
            
            
                   backgroundColor: 
                              'rgb(255, 99, 182)',
            },
            {
              fillColor: "#79D1CF",
              strokeColor: "#79D1CF",
              label :"Data 2",
              data: [ this.stackManagerTax[0],this.stackManagerTax[1],this.stackManagerTax[2]],
          
          
                 backgroundColor: 
                            'rgb(25, 919, 132)', 
          },
          {
            fillColor: "#79D1CF",
            strokeColor: "#79D1CF",
            label :"Data 3",
            data: [ this.stackManagerMarkup[0],this.stackManagerMarkup[1],this.stackManagerMarkup[2]],
        
        
               backgroundColor: 
                          'rgb(255, 929, 12)',  
        },
    
        ]
    };

var opt = {
    events: false,
    tooltips: {
        enabled: false
    },
    scales:{
      xAxes:[{
        stacked :true
      }],
      yAxes:[{
        stacked :true
      }]
    },
    hover: {
        animationDuration: 0
    },
    animation: {
        duration: 1,
        onComplete: function () {
            var chartInstance = this.chart,
                ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'center';

            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];                            
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
            });
        }
    }
};
 var ctx = document.getElementById("stack2"),
     myLineChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: opt
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
    var chartData = {
      labels: ['PAY','TAXES'],
          datasets: [
              {
                  fillColor: "#79D1CF",
                  strokeColor: "#79D1CF",
                  label :"Data 1",
                  data:  [ this.stackLocationPay[0],this.stackDepartmentTax[0]],
              
              
                     backgroundColor: 
                                'rgb(25, 99, 182)',
              },
              {
                fillColor: "#79D1CF",
                strokeColor: "#79D1CF",
                label :"Data 2",
                data: [ this.stackDepartmentPay[1],this.stackDepartmentTax[1]],
            
            
                   backgroundColor: 
                              'rgb(25, 199, 132)', 
            },
            {
              fillColor: "#79D1CF",
              strokeColor: "#79D1CF",
              label :"Data 3",
              data: [ this.stackDepartmentPay[2],this.stackDepartmentTax[2]],
          
          
                 backgroundColor: 
                            'rgb(255, 99, 132)',  
          },
          {
            fillColor: "#79D1CF",
            strokeColor: "#79D1CF",
            label :"Data 4",
            data: [ this.stackDepartmentPay[3],this.stackDepartmentTax[3]],
        
        
               backgroundColor: 
                          'rgb(255, 99, 12)',  
        },
          ]
      };
  
  var opt = {
      events: false,
      tooltips: {
          enabled: false
      },
      scales:{
        xAxes:[{
          stacked :true
        },{ scaleLabel: {
                     
         } 
        },{
         display: false,
                   ticks: {
                     autoSkip: true,
       
                   } }],
        yAxes:[
        {
          stacked :true
            }]
      },
      hover: {
          animationDuration: 0
      },
      animation: {
          duration: 1,
          onComplete: function () {
              var chartInstance = this.chart,
                  ctx = chartInstance.ctx;
              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'justify';
              ctx.textBaseline = 'center';
  
              this.data.datasets.forEach(function (dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function (bar, index) {
                      var data = dataset.data[index];                            
                      ctx.fillText(data, bar._model.x, bar._model.y - 5);
                  });
              });
          }
      }
  };
   var ctx = document.getElementById("stack3"),
       myLineChart = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: opt
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


      this.stackPay = res.chart.map(b =>b.Pay)
      this.stackPay = res.chart.map(b =>b.Pay)
  
      this.stackDepartmentTax = res.chart_Department.map(x =>x.Taxes)
      console.log(this.stackDepartmentTax)
  
      this.stackDepartmentPay = res.chart_Department.map(y =>y.Pay)
     
      
      this.stackManagerTax = res.chart_Manager.map(l =>l.Taxes)
  
      this.stackManagerPay = res.chart_Manager.map(m =>m.Pay)
      this.stackManagerMarkup = res.chart_Manager.map(m =>m.Markup)
  
      
      this.stackLocationTax = res.location_saving.map(l =>l.Taxes)
  
      this.stackLocationPay = res.location_saving.map(m =>m.Pay)
      this.stackLocationMarkup = res.location_saving.map(m =>m.Markup)


       this.barChart();
      this.bubbleChart();
      this.histogramChart();
      this.barBChart();
      this.pieChart();
      this.Stack();
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

      this.stackPay = res.chart.map(b =>b.Pay)
      this.stackPay = res.chart.map(b =>b.Pay)
  
      this.stackDepartmentTax = res.chart_Department.map(x =>x.Taxes)
      console.log(this.stackDepartmentTax)
  
      this.stackDepartmentPay = res.chart_Department.map(y =>y.Pay)
     
      
      this.stackManagerTax = res.chart_Manager.map(l =>l.Taxes)
  
      this.stackManagerPay = res.chart_Manager.map(m =>m.Pay)
      this.stackManagerMarkup = res.chart_Manager.map(m =>m.Markup)
  
      
      this.stackLocationTax = res.location_saving.map(l =>l.Taxes)
  
      this.stackLocationPay = res.location_saving.map(m =>m.Pay)
      this.stackLocationMarkup = res.location_saving.map(m =>m.Markup)

      this.barChart();
      this.bubbleChart();
      this.histogramChart();
      this.barBChart();
      this.pieChart();


      setTimeout(() => {
        this.isDepartment = false;
      }, 1000);

      console.log(this.managerDetails, "manager")
    })


  }

  managerDetails: any = [];

  selectManager(event) {
   
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

      this.stackPay = res.chart.map(b =>b.Pay)
    this.stackPay = res.chart.map(b =>b.Pay)

    this.stackDepartmentTax = res.chart_Department.map(x =>x.Taxes)
    console.log(this.stackDepartmentTax)

    this.stackDepartmentPay = res.chart_Department.map(y =>y.Pay)
   
    
    this.stackManagerTax = res.chart_Manager.map(l =>l.Taxes)

    this.stackManagerPay = res.chart_Manager.map(m =>m.Pay)
    this.stackManagerMarkup = res.chart_Manager.map(m =>m.Markup)

    
    this.stackLocationTax = res.location_saving.map(l =>l.Taxes)

    this.stackLocationPay = res.location_saving.map(m =>m.Pay)
    this.stackLocationMarkup = res.location_saving.map(m =>m.Markup)

      this.barChart();
      this.bubbleChart();
      this.histogramChart();
      this.barBChart();
      this.pieChart();
      this.Stack();

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
  
        this.stackPay = res.chart.map(b =>b.Pay)
        this.stackPay = res.chart.map(b =>b.Pay)
    
        this.stackDepartmentTax = res.chart_Department.map(x =>x.Taxes)
        console.log(this.stackDepartmentTax)
    
        this.stackDepartmentPay = res.chart_Department.map(y =>y.Pay)
       
        
        this.stackManagerTax = res.chart_Manager.map(l =>l.Taxes)
    
        this.stackManagerPay = res.chart_Manager.map(m =>m.Pay)
        this.stackManagerMarkup = res.chart_Manager.map(m =>m.Markup)
    
        
        this.stackLocationTax = res.location_saving.map(l =>l.Taxes)
    
        this.stackLocationPay = res.location_saving.map(m =>m.Pay)
        this.stackLocationMarkup = res.location_saving.map(m =>m.Markup)

        this.barChart();
      this.bubbleChart();
      this.histogramChart();
      this.barBChart();
      this.pieChart();
      this.Stack()

  this.pieChart();
        setTimeout(() => {
          this.isManger = false;
        }, 1000);
  
  
      })
  
    }
  




}
