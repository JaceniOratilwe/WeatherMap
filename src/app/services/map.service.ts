import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

appID='ae3c3d13b81ff2c97705df460490f557'; //copy default key from weather map website
  constructor(private http: HttpClient) {} //injecting from module.ts , after typing httpclient you will get an arror, click on quickfix to import httpclient

  getWeatherData(city:string){
   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ city+'&APPID='+this.appID); //after forecast add q, which represents city and remove id and always add http://
  //this.city = this.city.data.children;
  }

  
}
