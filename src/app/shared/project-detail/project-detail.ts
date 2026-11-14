import { Component, input, output } from '@angular/core';
import { Project } from '../../core/models/project';
import { TagList } from '../tag-list/tag-list';
import { Video } from '../../features/home/sections/video/video';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [TagList, Video],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetailsComponent {

  project = input.required<Project>();
  close = output<void>();

  closeModal(): void {
    this.close.emit();
  }
}