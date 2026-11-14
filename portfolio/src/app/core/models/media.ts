
export interface Media {
  type: 'image' | 'yt' | 'document';
  url: string;
  alt?: string;
  caption?: string;
  poster?: string;
}
