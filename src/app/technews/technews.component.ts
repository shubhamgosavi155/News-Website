import { Component } from '@angular/core';
import { NewsserviceapiService } from "../service/newsserviceapi.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {
  techNewsDisplay : any = []

constructor(private _services: NewsserviceapiService){
 
}

ngOnInit(): void {
  this._services.techNews().subscribe((result)=> {
    console.log(result);
    this.techNewsDisplay = result.articles
  })
}

}
