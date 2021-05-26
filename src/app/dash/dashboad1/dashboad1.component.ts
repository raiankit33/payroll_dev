import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';









@Component({
  selector: 'app-dashboad1',
  templateUrl: './dashboad1.component.html',
  styleUrls: ['./dashboad1.component.css']
})
export class Dashboad1Component implements OnInit {

  


  constructor( private router: Router) { }

  ngOnInit(): void {
 
  
 
    }
  


  

  

  refresh(){
    location.reload();
  }

  clickMe(){
    this.router.navigate(['dash/form']);
  }

}
