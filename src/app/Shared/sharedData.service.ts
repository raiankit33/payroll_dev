
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable()
export class SharedData{

private sharedData = new BehaviorSubject({});

private dashData = new BehaviorSubject({});

  currentSharedData =this.sharedData.asObservable(); 

  currentData =this.dashData.asObservable(); 
  
    constructor(){}



    updateSharedData(data){
        this.sharedData.next(data);
    }

    dashboadData(data){
      this.dashData.next(data);
    }

}