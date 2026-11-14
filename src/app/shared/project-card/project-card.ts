import { Component, input,signal } from '@angular/core';
import { Project } from '../../core/models/project';
import { TagList } from '../tag-list/tag-list';
import { ProjectDetailsComponent } from '../project-detail/project-detail';

@Component({
  imports: [TagList, ProjectDetailsComponent],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
    project = input.required<Project>();
    showDetails = signal(false);

}
