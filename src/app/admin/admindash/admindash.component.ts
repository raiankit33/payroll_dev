import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  user: any;
  showDetail: any = [];
name:any
  constructor(private router: Router,
    private Service: AllserviceService,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getDetail()
  }

  Search() {
    if (this.name == "") {
      this.getDetail();
    } else {
      this.showDetail = this.showDetail.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  getDetail(){
    let vv ={
      
        AuthToken:this.user.token
      
      
    }

    this.Service.getAdminDetailPage(vv).subscribe((res:any)=>{
console.log(res)
 this.showDetail = res.dic
    })
  }

}
