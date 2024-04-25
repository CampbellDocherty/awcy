import { FirebaseStorageContent } from '../../../firebase/storage';
import { BlogVideo } from '../styles/image.styles';
import { ContentType } from '.';

export const Video = ({ content }: { content: FirebaseStorageContent }) => (
  <BlogVideo loop autoPlay playsInline muted>
    <source src={content.downloadUrl} type={ContentType.MP4} />
    <meta itemProp="name" content={content.metadata.name}></meta>
  </BlogVideo>
);
