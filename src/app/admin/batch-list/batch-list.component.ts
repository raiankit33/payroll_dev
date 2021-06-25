import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {
name:string
batchDetail = []
  constructor(private router: Router,  private actRouter: ActivatedRoute, private Service : AllserviceService,) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(params => {
      console.log("parammap",params.get('batch'));
      // console.log("paramma2",JSON.parse( params.get('data')));
      var Id = params.get('batch');
  
      if(Id != undefined && Id != ""  ){
        this.getBatchDetail(Id);
        
      }
      else{
        this.getBatchDetail("")
      }
    })
  }

  Search(){

  }


  getBatchDetail(Id){

    let b = {
      user_id :Id
    }
    this.Service.showThem(b).subscribe((res: any) => {
 this.batchDetail =res.dic
 console.log(res)
    })
  }

}
