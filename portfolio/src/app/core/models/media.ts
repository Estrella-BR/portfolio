
export interface Media {
  type: 'image' | 'video';
  url: string;
  alt?: string;
  caption?: string;
  poster?: string;
}
