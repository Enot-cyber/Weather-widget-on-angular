import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherWigetMainComponent } from './Components/weather-wiget-main/weather-wiget-main.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWigetMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
