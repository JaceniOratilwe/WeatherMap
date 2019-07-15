import { Component } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
city="pretoria";
weatherData;
list;
  constructor(private service : MapService) { //MapService is how you named your service when you created it
    this.service.getWeatherData(this.city).subscribe(data=>{
       this.list=data;
      console.log(data);
      this.weatherData=this.list.list;
    });
  }
submit(city){
  this.service.getWeatherData(this.city).subscribe(data=>{
    this.list=data;
   console.log(data);
   this.weatherData=this.list.list;
  });
}
}
