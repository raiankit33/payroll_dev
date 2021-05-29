import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../service/allservice.service';
import { SharedData } from '../Shared/sharedData.service';
import {Chart} from 'chart.js';

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
   
  


  constructor(
    private Service : AllserviceService,
   
    private sharedData : SharedData
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));

    var myChart = new Chart('Chart', {
      type: 'pie',
      data: {
          labels: ['Total Cost', 'Total Saving ', 'Total Tax'],
          datasets: [{
             
              data: [2,4 ,7],
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
          console.log(res);
          console.log(this.userObj,'lllllll');

    })



  }
  

 

  updateDriver(){
    

 

}

}