import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeroDetailComponent } from './hero-detail.component';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeEditComponent } from './employee-edit.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guard/checklogin.guard';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
  ],
  providers: [LoginService, CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
