import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail.component';
import { EmployeeListComponent } from './employee.component';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
