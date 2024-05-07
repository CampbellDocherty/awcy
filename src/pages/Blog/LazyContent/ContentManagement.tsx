/* eslint-disable jsx-a11y/no-autofocus */
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/User';
import {
  FirebaseStorageContent,
  deleteFile,
  pinFile,
  updateCaption,
} from '../../../firebase/storage';
import { Delete, Edit, EditInput, Pin } from '../styles/image.styles';

export const ContentManagement = ({
  content,
  caption,
  setCaption,
  onDelete,
}: {
  content: FirebaseStorageContent;
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  onDelete: (item: FirebaseStorageContent) => void;
}) => {
  const user = useContext(UserContext);

  const isPinned =
    content.metadata.customMetadata?.pinned === 'true' ? true : false;
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    await deleteFile(content.metadata.name);
    onDelete(content);
  };

  const handlePin = () => {
    pinFile(content.metadata.name, !isPinned);
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

  return (
    <>
      {isEditing && (
        <EditInput
          autoFocus
          onKeyDown={(e) => handleKeyDown(e)}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      )}
      {user && <Delete onClick={handleDelete}>Delete</Delete>}
      {user && <Pin onClick={handlePin}>{isPinned ? 'Unpin' : 'Pin'}</Pin>}
      {user && <Edit onClick={handleEdit}>Edit</Edit>}
    </>
  );
};
