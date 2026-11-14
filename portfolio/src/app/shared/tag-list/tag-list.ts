import { Component, input, } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag-list',
  styleUrl: './tag-list.scss',
  templateUrl: './tag-list.html',
})
export class TagList {
  tags = input.required<string[]>();
}
