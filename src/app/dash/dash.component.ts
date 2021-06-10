import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  user: any;

  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }


  show(){
    this.router.navigate(['dash/dashboad']);
  }

  showMe(){
    this.router.navigate(['dash/dashboad1']);
  }

  Batch(){
    this.router.navigate(['dash/batch']);
  }

  Employee(){
    this.router.navigate(['dash/employeeList']);
  }
}
