import { FirebaseStorageContent, deleteFile } from '../../firebase/storage';
import {
  Article,
  BlogImage,
  BlogVideo,
  Caption,
  Section,
} from './styles/image.styles';
import { useContext } from 'react';
import { UserContext } from '../../context/User';

enum ContentType {
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
  const handleDelete = async () => {
    await deleteFile(content.metadata.name);
    onDelete(content);
  };

  if (
    content.metadata.contentType === ContentType.MP4 ||
    content.metadata.contentType === ContentType.QUICKTIME
  ) {
    return (
      <Article>
        <Section>
          <BlogVideo loop autoPlay playsInline muted>
            <source src={content.downloadUrl} type={ContentType.MP4} />
            <meta itemProp="name" content={content.metadata.name}></meta>
          </BlogVideo>
        </Section>
        {content.metadata.customMetadata?.caption && (
          <Caption>{content.metadata.customMetadata?.caption}</Caption>
        )}
        {user && <button onClick={handleDelete}>Delete</button>}
      </Article>
    );
  }

  return (
    <Article>
      <div>
        <Section>
          <BlogImage src={content.downloadUrl} alt={content.metadata.name} />
        </Section>
        {content.metadata.customMetadata?.caption && (
          <Caption>{content.metadata.customMetadata?.caption}</Caption>
        )}
      </div>
      {user && <button onClick={handleDelete}>Delete</button>}
    </Article>
  );
};

export default LazyImage;
