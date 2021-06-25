import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from '../service/allservice.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  user: any;
  Details: any = [];
  error: string;
  NameDetails: any = [];

  Department: any;
  manager: any = [];
  agency: any = [];
 state : any = [];

 userRole :boolean = true ;
 adminRole : boolean = true;

  constructor(private router: Router,
    private Service: AllserviceService,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
this.getBatchName();

 if(this.user.role == 'user'){
  this.userRole = true ,
  this.adminRole = false

 }else if(this.user.role == 'admin'){
   this.adminRole =true,
   this.userRole = false
 }
  }

  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to description
    search: true,
    limitTo: 0,
  };


  upload(){
    this.router.navigate(['dash/dashboad']);
  }
 
  Dashboard(){
    this.router.navigate(['dash/dashboad1']);
  }

  adminSetting(){
    this.router.navigate(['dash/ASetting']);
  }

  Employee(){
    this.router.navigate(['dash/employeeList']);
  }

  selectDate(){

  }

  getBatchName() {
    let tt ={
      user_id : this.user.id,
     
    }

    this.Service.showThem(tt).subscribe((res: any) => {
      this.Details = res.dic;
console.log(this.Details,'uuuuuu')


      // var length = this.Details.length;
      // this.ShowName(this.Details[length - 1].id);

    }, (error) => {
      this.error = 'Server Down Please try After Sometime ..! '
    }

    );
  }

  
 

    getBatchData(event){
    console.log(event)
    this.router.navigate(['dash/dashboad1', { 'Batch': event }]);

    let tt = {
      id: event,
      user_id : this.user.id
    }
 
    // this.isLoad = true

    this.Service.getSingleBatch(tt).subscribe((res: any) => {
      this.NameDetails = res.data;
 console.log(this.NameDetails,"dash")
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
  })
}


selectManager(event){

  // this.router.navigate(['dash/dashboad1', { 'Man': event }]);

}

selectDepartment(event){

}

selectVendor(event){

}

selectState(event){

}
}