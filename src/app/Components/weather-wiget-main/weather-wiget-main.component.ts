import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-wiget-main',
  templateUrl: './weather-wiget-main.component.html',
  styleUrls: ['./weather-wiget-main.component.css']
})
export class WeatherWigetMainComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main: {},
      isday: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Yakutsk&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.seWeatherData(data);})

    //let data = JSON.parse('{"coord":{"lon":72.8479,"lat":19.0144},"weather":[{"id":711,"main":"Smoke","description":"smoke","icon":"50n"}],"base":"stations","main":{"temp":302.14,"feels_like":300.63,"temp_min":302.14,"temp_max":302.14,"pressure":1013,"humidity":21},"visibility":3000,"wind":{"speed":2.06,"deg":120},"clouds":{"all":37},"dt":1676393505,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1676338670,"sunset":1676380080},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    //this.seWeatherData(data);
  }

  seWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
