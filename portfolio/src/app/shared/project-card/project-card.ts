import { Component, input } from '@angular/core';
import { Project } from '../../core/models/project';
import { TagList } from '../tag-list/tag-list';

@Component({
  imports: [TagList],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
    project = input.required<Project>();

}
