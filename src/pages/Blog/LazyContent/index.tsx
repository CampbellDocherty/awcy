import { useContext, useState } from 'react';
import { UserContext } from '../../../context/User';
import { FirebaseStorageContent } from '../../../firebase/storage';
import { Article, BlogImage, Caption, Section } from '../styles/image.styles';
import { ContentManagement } from './ContentManagement';
import { Video } from './Video';

export enum ContentType {
  MP4 = 'video/mp4',
  QUICKTIME = 'video/quicktime',
}

const LazyImage = ({
  content,
  onDelete,
}: {
  content: FirebaseStorageContent;
  onDelete: (item: FirebaseStorageContent) => void;
}) => {
  const user = useContext(UserContext);
  const [caption, setCaption] = useState(
    content.metadata.customMetadata?.caption || ''
  );

  const isVideo =
    content.metadata.contentType === ContentType.MP4 ||
    content.metadata.contentType === ContentType.QUICKTIME;

  return (
    <Article>
      <div>
        <Section>
          {isVideo ? (
            <Video content={content} />
          ) : (
            <BlogImage src={content.downloadUrl} alt={content.metadata.name} />
          )}
        </Section>
        {caption && <Caption>{caption}</Caption>}
      </div>
      {user && (
        <ContentManagement
          content={content}
          onDelete={onDelete}
          caption={caption}
          setCaption={setCaption}
        />
      )}
    </Article>
  );
};

export default LazyImage;
