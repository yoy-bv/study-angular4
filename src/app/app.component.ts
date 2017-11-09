import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  cities = [{ id: 1, name: "Ha Noi" },
  { id: 2, name: "Hai Phong" },
  { id: 3, name: "Thua Thien Hue" },
  { id: 4, name: "Da Nang" },
  { id: 5, name: "Quang Ngai" },
  { id: 6, name: "Phu Yen" },]
  onSubmit(value: any) {
    console.log(value);
  }
}