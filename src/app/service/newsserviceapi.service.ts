import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceapiService {

  constructor(private _http:HttpClient) { }

    // newsApi
  newsApi = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=556360b83ca841ad98aa9c289d5b19bc'

    // tech News
  techApiUrl = ' https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=556360b83ca841ad98aa9c289d5b19bc'


  businessApiUrl = ' https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=556360b83ca841ad98aa9c289d5b19bc'
    // topHeading()
  topHeading():Observable<any>{
    return this._http.get(this.newsApi)
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl)
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl)
  }

}
