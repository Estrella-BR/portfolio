import { Component } from '@angular/core';
import { EXPERIENCES } from '../../../../core/data/portfolio';
import { SectionTitle } from '../../../../shared/section-title/section-title';
import { TagList } from '../../../../shared/tag-list/tag-list';

@Component({
  imports: [SectionTitle, TagList],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {
    experiences = EXPERIENCES;
  
}
