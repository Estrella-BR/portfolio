import { Component } from '@angular/core';
import { PROJECTS } from '../../../../core/data/portfolio';
import { ProjectCard } from '../../../../shared/project-card/project-card';
import { SectionTitle } from '../../../../shared/section-title/section-title';

@Component({
  imports: [SectionTitle, ProjectCard],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
    projects = PROJECTS;

}
