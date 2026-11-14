import { Component,input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: "./video.html"
})
export class Video{
  id = input.required<string>();
}