import one from './one.jpeg';
import two from './two.jpeg';
import three from './three.jpeg';
import four from './four.jpeg';
import tVideo from './t-video.mp4';

export enum ContentType {
  JPEG = 'jpeg',
  MP4 = 'video/mp4',
}

export type Content = {
  src: string;
  alt: string;
  contentType: ContentType;
};

export const blogContent: Content[] = [
  { src: tVideo, alt: 'animation for t', contentType: ContentType.MP4 },
  { src: one, alt: 'one', contentType: ContentType.JPEG },
  { src: two, alt: 'two', contentType: ContentType.JPEG },
  { src: three, alt: 'three', contentType: ContentType.JPEG },
  { src: four, alt: 'four', contentType: ContentType.JPEG },
];
