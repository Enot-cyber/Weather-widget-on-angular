import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWigetMainComponent } from './weather-wiget-main.component';

describe('WeatherWigetMainComponent', () => {
  let component: WeatherWigetMainComponent;
  let fixture: ComponentFixture<WeatherWigetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWigetMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWigetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
