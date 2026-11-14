import { Component  } from '@angular/core';
import { Footer  } from './shared/footer/footer';
import { Hero } from './features/home/sections/hero/hero';
import { About } from './features/home/sections/about/about';
import { Experience } from './features/home/sections/experience/experience';
import { Projects } from './features/home/sections/projects/projects';
import { Contact } from './features/home/sections/contact/contact';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Footer,
    Hero,
    About,
    Experience,
    Projects,
    Contact 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}