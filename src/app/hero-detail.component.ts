import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AppComponent } from './app.component';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() name:string;
  @Output() onvote = new EventEmitter<boolean>();

  public voted:boolean = false;
  public votee:boolean;
  vote(agree:boolean){
    this.votee = agree;
    this.voted = true;
    this.onvote.emit(agree);
  }
}