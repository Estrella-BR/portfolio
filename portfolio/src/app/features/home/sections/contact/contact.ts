import { Component } from '@angular/core';
import { PORTFOLIO } from '../../../../core/data/portfolio';
import { SectionTitle } from '../../../../shared/section-title/section-title';
@Component({
  imports: [SectionTitle],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
    portfolio = PORTFOLIO;

}
