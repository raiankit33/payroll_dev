import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  
  
    
  
  }

  clickMe(){
    this.router.navigate(['dash/form']);
  }

  clickMe2(){
    this.router.navigate(['dash/list']);
  }

}
