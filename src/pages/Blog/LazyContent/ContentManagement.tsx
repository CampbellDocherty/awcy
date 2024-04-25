/* eslint-disable jsx-a11y/no-autofocus */
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/User';
import {
  FirebaseStorageContent,
  deleteFile,
  updateCaption,
} from '../../../firebase/storage';
import { Delete, Edit, EditInput } from '../styles/image.styles';

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

  const [isEditing, setIsEditing] = useState(false);

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
      {user && <Edit onClick={handleEdit}>Edit</Edit>}
    </>
  );
};
