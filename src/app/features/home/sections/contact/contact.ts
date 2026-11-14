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

    buildWhatsAppLink(number: string){
      const cleanPhone = number.replace(/\D/g, '');
      const base = `https://wa.me/${cleanPhone}`;
      const message = "Hello I saw your portfolio and I'm interested in talking!"
      return message ? `${base}?text=${encodeURIComponent(message)}` : base;
    }
}
