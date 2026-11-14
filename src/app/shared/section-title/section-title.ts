import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-title',
  styleUrl: './section-title.scss',
  templateUrl: './section-title.html',
})
export class SectionTitle {
  number = input.required<string>();
  label = input.required<string>();
  title = input.required<string>();
}
