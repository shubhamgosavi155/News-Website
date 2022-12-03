import { Component } from '@angular/core';
import { NewsserviceapiService } from "../service/newsserviceapi.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  businessNewsDisplay:any = [];
  
  constructor(private _services:NewsserviceapiService){
  
  
  
  
  }
  
  ngOnInit(): void{
    this._services.topHeading().subscribe((result => {
      console.log(result);
      this.businessNewsDisplay = result.articles;
    }))
  }
  


}
