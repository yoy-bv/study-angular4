import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { LoginService } from './services/login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public checkIsLogged: boolean;
  constructor(private loginService: LoginService) {

  }
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
  ngOnInit() {
    this.checkIsLogged = this.loginService.IsLogged();
    console.log(this.loginService.IsLogged());
  }
  Logout() {
    this.loginService.SetLogin(false);
    alert('Log Out');
  }
}