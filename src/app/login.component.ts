import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private router:Router, private loginService:LoginService) {

  }
  CheckLogin(value:any){
      console.log(value);
      if (value.name == "admin" && value.password == "admin") {
          this.loginService.SetLogin(true);
          this.router.navigate(['/']);
      }
  }
}