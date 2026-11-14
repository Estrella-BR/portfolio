import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/Estrella-BR'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/'
    }
  ];

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}