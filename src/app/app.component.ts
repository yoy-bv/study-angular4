import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  today = Date.now();
  percent = 1.235345;
  opject:Object = {abc:'abc', cdf:'cdf', number:['1','2','3','4']};
}