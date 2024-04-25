import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/User';
import { FirebaseStorageContent } from '../../../firebase/storage';
import {
  Article,
  BlogImage,
  Caption,
  Modal,
  ModalContent,
  Section,
} from '../styles/image.styles';
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

  const [isExpanded, setIsExpanded] = useState(false);

  const isVideo =
    content.metadata.contentType === ContentType.MP4 ||
    content.metadata.contentType === ContentType.QUICKTIME;

  const onExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      {isExpanded && (
        <Modal onClick={onExpand}>
          <ModalContent>
            {isVideo ? (
              <Video firebaseContent={content} />
            ) : (
              <BlogImage
                src={content.downloadUrl}
                alt={content.metadata.name}
              />
            )}
          </ModalContent>
        </Modal>
      )}

      <Article>
        <div>
          <Section>
            {isVideo ? (
              <Video firebaseContent={content} onClick={onExpand} />
            ) : (
              <BlogImage
                onClick={onExpand}
                src={content.downloadUrl}
                alt={content.metadata.name}
              />
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
    </>
  );
};

export default LazyImage;
