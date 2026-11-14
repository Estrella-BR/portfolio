import { Component } from '@angular/core';
import { PORTFOLIO } from '../../core/data/portfolio';
@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  portfolio = PORTFOLIO;
  currentYear = new Date().getFullYear();
}
