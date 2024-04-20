import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from './app';

const storage = getStorage(app);

// Upload file and metadata to the object 'images/mountains.jpg'

type Metadata = {
  name: string;
  caption?: string;
};

export const uploadFile = (file: File, metadata: Metadata) => {
  const storageRef = ref(storage, metadata.name);
  uploadBytesResumable(storageRef, file, {
    contentType: file.type,
    customMetadata: metadata,
  });
};
