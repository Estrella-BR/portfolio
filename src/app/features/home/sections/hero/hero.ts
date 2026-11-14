import { Component } from '@angular/core';
import { PORTFOLIO } from '../../../../core/data/portfolio';
@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
    portfolio = PORTFOLIO;

}
