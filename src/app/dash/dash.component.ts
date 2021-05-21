import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }


  show(){
    this.router.navigate(['dash/dashboad']);
  }

  showMe(){
    this.router.navigate(['dash/dashboad1']);
  }
}
