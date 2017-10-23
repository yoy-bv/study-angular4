import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
@Component({
  selector: 'hero-detail',
  template: `
    <h1>This is home component</h1>
    <button (click)="GotoEmployee()">Go to Employee</button>
    `
})
export class HomeComponent {
  constructor(private router:Router) {

  }
  GotoEmployee(){
    this.router.navigate(['employees']);
  }
}