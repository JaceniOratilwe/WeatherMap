import { Component } from '@angular/core';
import { MapService } from '../services/map.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
city="pretoria";
weatherData;
list;
search;
today;
  constructor(private service : MapService) { //MapService is how you named your service when you created it
    this.service.getWeatherData(this.city).subscribe(data=>{
       this.list=data;
      console.log(data);
      this.weatherData=this.list.list;
    });
    this.today = Date.now();
  
  }
submit(city){
  this.service.getWeatherData(this.city).subscribe(data=>{
    this.list=data;
   console.log(data);
   this.weatherData=this.list.list;
  });
}
}
