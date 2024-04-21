// eslint-disable-next-line import/named
import { User } from 'firebase/auth';
import { FirebaseStorageContent, deleteFile } from './firebase/storage';
import {
  Article,
  BlogImage,
  BlogVideo,
  Caption,
  Section,
} from './styles/image.styles';

enum ContentType {
  MP4 = 'video/mp4',
}

const LazyImage = ({
  content,
  user,
  onDelete,
}: {
  content: FirebaseStorageContent;
  user: User | null;
  onDelete: (item: FirebaseStorageContent) => void;
}) => {
  const handleDelete = async () => {
    await deleteFile(content.metadata.name);
    onDelete(content);
  };

  if (content.metadata.contentType === ContentType.MP4) {
    return (
      <Article>
        <Section>
          <BlogVideo loop autoPlay playsInline muted>
            <source
              src={content.downloadUrl}
              type={content.metadata.contentType}
            />
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
