import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  text = 'Welcome Text';
  image='http://lorempixel.com/300/300';
  applyClass = true;
  applyColor = true;
  heroes = HEROES;
  myHero = this.heroes[0];

  // click me
  public clickbinding:any;
  OnClick(value){
    this.clickbinding = value;
  }
  public agree:number = 0;
  public disgree:number = 0;

  pesions = ['Mr A', 'Mr B','Mr C','Mr D']
  parentVote(agree:boolean){
    if (agree) this.agree ++;
    else this.disgree ++;
  }
}
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
];