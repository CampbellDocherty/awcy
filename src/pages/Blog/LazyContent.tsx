/* eslint-disable jsx-a11y/no-autofocus */
import { KeyboardEventHandler, useContext, useState } from 'react';
import { UserContext } from '../../context/User';
import {
  FirebaseStorageContent,
  deleteFile,
  updateCaption,
} from '../../firebase/storage';
import {
  Article,
  BlogImage,
  BlogVideo,
  Caption,
  Delete,
  Edit,
  EditInput,
  Section,
} from './styles/image.styles';

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

  const [isEditing, setIsEditing] = useState(false);
  const [caption, setCaption] = useState(
    content.metadata.customMetadata?.caption || ''
  );

  const handleDelete = async () => {
    await deleteFile(content.metadata.name);
    onDelete(content);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateCaption(content.metadata.name, caption);
      setIsEditing(false);
    }
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
        {caption && !isEditing && <Caption>{caption}</Caption>}
        {isEditing && (
          <EditInput
            autoFocus
            onKeyDown={(e) => handleKeyDown(e)}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        )}
        {user && <Delete onClick={handleDelete}>Delete</Delete>}
        {user && <Edit onClick={handleEdit}>Edit</Edit>}
      </Article>
    );
  }

  return (
    <Article>
      <div>
        <Section>
          <BlogImage src={content.downloadUrl} alt={content.metadata.name} />
        </Section>
        {caption && !isEditing && <Caption>{caption}</Caption>}
      </div>
      {isEditing && (
        <EditInput
          autoFocus
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      )}
      {user && <Delete onClick={handleDelete}>Delete</Delete>}
      {user && <Edit onClick={handleEdit}>Edit</Edit>}
    </Article>
  );
};

export default LazyImage;
