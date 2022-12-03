import { Component } from '@angular/core';
import { NewsserviceapiService } from "../service/newsserviceapi.service";

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent {
  // display data
  topHeadingDisplay:any = [];
  
constructor(private _services:NewsserviceapiService){




}

ngOnInit(): void{
  this._services.topHeading().subscribe((result => {
    console.log(result);
    this.topHeadingDisplay = result.articles;
  }))
}

}
