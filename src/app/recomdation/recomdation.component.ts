import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomdation',
  templateUrl: './recomdation.component.html',
  styleUrls: ['./recomdation.component.css']
})
export class RecomdationComponent implements OnInit {

  constructor(  private router: Router,) { }

  ngOnInit(): void {
  }

  GOtoForm(){
    this.router.navigate(['dash/form']);
  }

}
