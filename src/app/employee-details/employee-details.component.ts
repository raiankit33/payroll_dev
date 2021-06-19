import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../service/allservice.service';
import { SharedData } from '../Shared/sharedData.service';
import {Chart} from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  alert: boolean=false
   user:any;
    
   Batch_Name: string;
    Batch_id: string;
    DT_Pay_Rate: string;
    Delivery_TAX: string;
    Double_Time_H:string;
    Double_Time_Total: string;
    EPLI_TAX: string;
    FEE_TAX: string;
    FICA_Med_TAX:string;
    FICA_TAX: string;
    FUI_Sol_TAX: string;
    FUI_TAX: string;
    Invoice_Number:string;
    Markup: string;
    Markup_Percentage: string;
    OT_Pay_Rate: string;
    Over_Time_H: string;
    Over_Time_Total: string;
    Project_End: string;
    ST_Pay_Rate: string;
    SUI_TAX: string;
    Sales_TAX: string;
    Saving: string;
    Staffing_Company_Cost: string;
    Standard_Time_H:string;
    Standard_Time_Total:string;
    Tech_TAX: string;
    Total_COST: string;
    Total_PAY: string;
    Total_TAX:string;
    WC_Admin_TAX: string;
    WC_TAX: string;
    Week_Start_Date: string;
    Work_City: string;
    Work_State: string;
    Work_Zip: string
    Worker_Agency: string;
    Worker_Comp_Code:string
    Worker_Department: string;
    Worker_Location: string;
    Worker_Manager: string;
    Worker_Name: string;
    Worker_Title: string;
    Worker_Unique_Id:string;
    created_at: string;

  userObj = {
    Batch_Name: " ",
    Batch_id: "",
    DT_Pay_Rate: "",
    Delivery_TAX: "",
    Double_Time_H: "",
    Double_Time_Total: "",
    EPLI_TAX: "",
    FEE_TAX: "",
    FICA_Med_TAX:"",
    FICA_TAX: "",
    FUI_Sol_TAX: "",
    FUI_TAX: "",
    Invoice_Number:"",
    Markup: "",
    Markup_Percentage: "",
    OT_Pay_Rate: "",
    Over_Time_H: "",
    Over_Time_Total: "",
    Project_End: "",
    ST_Pay_Rate: "",
    SUI_TAX: "",
    Sales_TAX: "",
    Saving: "",
    Staffing_Company_Cost: "",
    Standard_Time_H:"",
    Standard_Time_Total:"",
    Tech_TAX: "",
    Total_COST: "",
    Total_PAY: "",
    Total_TAX:"",
    WC_Admin_TAX: "",
    WC_TAX: "",
    Week_Start_Date: "",
    Work_City: "",
    Work_State: "",
    Work_Zip: "4",
    Worker_Agency: "",
    Worker_Comp_Code:"" ,
    Worker_Department: "",
    Worker_Location: "",
    Worker_Manager: "",
    Worker_Name: "",
    Worker_Title: "",
    Worker_Unique_Id:"",
    created_at: "",
  };
  Details: any =[];
  error: string;
   
  allData : any ;
  


  constructor(
    private Service : AllserviceService,
    private actRouter: ActivatedRoute,
    private sharedData : SharedData
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getState();





    this.actRouter.paramMap.subscribe(params => {
      console.log("parammap",params.get('Worker'));
      // console.log("paramma2",JSON.parse( params.get('data')));
      var Worker_Id = params.get('Worker');
  
      if(Worker_Id != undefined && Worker_Id != ""  ){
        this.dashboadData(Worker_Id);
        
      }
      else{
        this.dashboadData("")
      }
    })
  

    this.sharedData.currentSharedData.subscribe(res =>{ 
      this.userObj={
             
          
            Batch_Name:  res['Batch_Name'],
            Batch_id:  res['Batch_id'],
            DT_Pay_Rate: res['DT_Pay_Rate'],
            Delivery_TAX:  res['Delivery_TAX'],
            Double_Time_H: res['Double_Time_H'],
            Double_Time_Total:  res['Double_Time_Total'],
            EPLI_TAX:  res['EPLI_TAX'],
            FEE_TAX:  res['FEE_TAX'],
            FICA_Med_TAX: res['FICA_Med_TAX'],
            FICA_TAX:  res['FICA_TAX'],
            FUI_Sol_TAX:  res['FUI_Sol_TAX'],
            FUI_TAX:  res['FUI_TAX'],
            Invoice_Number: res['Invoice_Number'],
            Markup:  res['Markup'],
            Markup_Percentage: res['Markup_Percentage'],
            OT_Pay_Rate:  res['OT_Pay_Rate'],
            Over_Time_H:  res['Over_Time_H'],
            Over_Time_Total:  res['Over_Time_Total'],
            Project_End:  res['Project_End'],
            ST_Pay_Rate:  res['ST_Pay_Rate'],
            SUI_TAX:  res['SUI_TAX'],
            Sales_TAX:  res['Sales_TAX'],
            Saving:  res['Saving'],
            Staffing_Company_Cost:  res['Staffing_Company_Cost'],
            Standard_Time_H: res['Standard_Time_H'],
            Standard_Time_Total: res['Standard_Time_Total'],
            Tech_TAX:  res['Tech_TAX'],
            Total_COST:  res['Total_COST'],
            Total_PAY:  res['Total_PAY'],
            Total_TAX: res['Total_TAX'],
            WC_Admin_TAX:  res['WC_Admin_TAX'],
            WC_TAX:  res['WC_TAX'],
            Week_Start_Date:  res['Week_Start_Date'],
            Work_City:  res['Work_City'],
            Work_State:  res['Work_State'],
            Work_Zip:  res['Work_Zip'],
            Worker_Agency:  res['Worker_Agency'],
            Worker_Comp_Code: res['Worker_Comp_Code'],
            Worker_Department:  res['Worker_Department'],
            Worker_Location:  res['Worker_Location'],
            Worker_Manager:  res['Worker_Manager'],
            Worker_Name:  res['Worker_Name'],
            Worker_Title:  res['Worker_Title'],
            Worker_Unique_Id: res['Worker_Unique_Id'],
            created_at: res['created_at'],

          }
          
          console.log(this.userObj,'lllllll');

    })





  }
  
pieChart(){
  var myChart = new Chart('Chart', {
    type: 'doughnut',
    data: {
        labels: ['Standard_Time_Total', 'Over_Time_Total ', 'Double_Time_Total'],
        datasets: [{
           
            data: [this.userObj.Standard_Time_Total, this.userObj.Over_Time_Total ,this.userObj.Double_Time_Total],
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
 


barChart(){
//   var myChart = new Chart('myChart', {
//     type: 'bar',
//     data: {
//         labels: ['FICA_TAX','FICA_Med_TAX','FEE_TAX','EPLI_TAX','Delivery_TAX','FUI_Sol_TAX','FUI_TAX','SUI_TAX',
//         'Sales_TAX','WC_Admin_TAX','Tech_TAX','FUI_Sol_TAX'],
//         datasets: [{
//             label:'',
//             data: [  this.userObj.FICA_TAX, this.userObj.FICA_Med_TAX , this.userObj.FEE_TAX, this.userObj.EPLI_TAX , 
//               this.userObj.Delivery_TAX , this.userObj.FUI_Sol_TAX ,this.userObj.FUI_TAX , this.userObj.SUI_TAX , this.userObj.Sales_TAX ,
//                this.userObj.WC_Admin_TAX , this.userObj.Tech_TAX , this.FUI_Sol_TAX  ],
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
//             borderColor :[
      
        
//             ],
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
//     }
    
  
// });



var chartData = {
  labels: ['FICA TAX','FICA MED TAX','FEE TAX','EPLI TAX','DELIVERY TAX','FUI SOL TAX','FUI TAX','SUI TAX',
        'SALES TAX','WC ADMIN_TAX','TECH TAX','FUI SOL TAX'],
      datasets: [
          {
              fillColor: "#79D1CF",
              strokeColor: "#79D1CF",
              data: [  this.userObj.FICA_TAX, this.userObj.FICA_Med_TAX , this.userObj.FEE_TAX, this.userObj.EPLI_TAX , 
                this.userObj.Delivery_TAX , this.userObj.FUI_Sol_TAX ,this.userObj.FUI_TAX , this.userObj.SUI_TAX , this.userObj.Sales_TAX ,
                 this.userObj.WC_Admin_TAX , this.userObj.Tech_TAX , this.FUI_Sol_TAX  ],
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


doughnutChart(){
//   var myChart = new Chart('doughnut', {
//     type: 'bar',
//     data: {
//         labels: ['','Staffing Company Cost','Total COST','Total Saving ','Markup','Total_PAY'],
//         datasets: [{
//             label:'',
//             data: [  this.userObj.Staffing_Company_Cost, this.userObj.Total_COST , this.userObj.Saving , this.userObj.Markup ,this.userObj.Total_PAY   ],
//             fill: true,
        
//          backgroundColor: [
//           'rgb(255, 99, 132)',
//           'rgb(54, 162, 235)',
//           'rgb(255, 205, 86)',
//           'rgb(255, 99, 12)',
//           'rgb(54, 16, 235)',

//             ],
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
//             display: false,
//             labelString: ' Types of Amount'
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
//             labelString: ' Amount in Dollar '
//           }
//         }]
//       }
//     }
    
  
// });

var chartData = {
  labels: ['','Staffing Company Cost','Total COST','Total Saving ','Markup','Total_PAY'],
      datasets: [
          {
              fillColor: "#79D1CF",
              strokeColor: "#79D1CF",
              data: [  this.userObj.Staffing_Company_Cost, this.userObj.Total_COST , this.userObj.Saving , this.userObj.Markup ,this.userObj.Total_PAY   ],
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
var ctx = document.getElementById("doughnut"),
   myLineChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: opt
   });

}

  updateDriver(){
    

 

}


dashboadData(Worker_Id){
  this.sharedData.currentData.subscribe(res => {
    this.allData = res 
    this.getEmployee(this.allData,Worker_Id),
    console.log(this.allData ,"dashdata")
     })
}

getEmployee(allData ,Worker_Id,){
let tt ={
  Worker_Unique_Id : Worker_Id,
  data : allData
}
console.log(tt,"tt")

  this.Service.getEmployeeList(tt).subscribe((res:any) => {
 console.log(res)
 this.userObj =  res.data[0]
this.barChart();
this.doughnutChart();
this.pieChart();
  })
}


getState() {

  this.Service.getSetting().subscribe((res: any) => {
    this.Details = res.data;
   
  }, (error) => {
    this.error = 'Server Down Please try After Sometime ..! '
  }

  );
}


getEmployeeStateData(event){
  let send ={
    State :  event ,
    data : this.userObj,
  
  }

  this.Service.getEmployeeState(send).subscribe((res : any )=>{
      this.userObj = res.data
           this.pieChart();
           this.doughnutChart();
           this.barChart();             
  })
}

}