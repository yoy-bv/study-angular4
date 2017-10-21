import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail.component';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EmployeeListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
