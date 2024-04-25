import { FirebaseStorageContent } from '../../../firebase/storage';
import { BlogVideo } from '../styles/image.styles';
import { ContentType } from '.';

interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
  firebaseContent: FirebaseStorageContent;
}

export const Video = ({ firebaseContent, onClick }: VideoProps) => (
  <BlogVideo loop autoPlay playsInline muted onClick={onClick}>
    <source src={firebaseContent.downloadUrl} type={ContentType.MP4} />
    <meta itemProp="name" content={firebaseContent.metadata.name}></meta>
  </BlogVideo>
);
