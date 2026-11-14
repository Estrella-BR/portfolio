import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../../core/data/portfolio';
import { TagList } from '../../../../shared/tag-list/tag-list';
import { Title } from '@angular/platform-browser';
import { SectionTitle } from '../../../../shared/section-title/section-title';

@Component({
  imports: [SectionTitle, TagList],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
    skillGroups = SKILL_GROUPS;

}
