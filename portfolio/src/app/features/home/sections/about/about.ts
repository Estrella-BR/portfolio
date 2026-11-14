import { Component } from '@angular/core';
import { PORTFOLIO } from '../../../../core/data/portfolio';
import { SectionTitle } from '../../../../shared/section-title/section-title';

@Component({
  imports: [SectionTitle],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
    portfolio = PORTFOLIO;
  
}
