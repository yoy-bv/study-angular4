import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LogineService } from './services/login.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  providers: [LogineService, AuthService]
})
export class LoginComponent {
  public tokenSS:any;
  constructor(private router: Router, 
    private activatedRoute:ActivatedRoute, 
    public loginService: LogineService,
    public authService: AuthService
  ) {

  }
  CheckLogin(value:any){
    this.loginService.Login(value).subscribe(response => {
      console.log(response);
      this.tokenSS = response.token;
      if (response) {
          alert('Save success');
          this.router.navigate(['/']);
      }
  })
  }
}