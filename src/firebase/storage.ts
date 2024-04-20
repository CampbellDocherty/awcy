import {
  getStorage,
  ref,
  uploadBytesResumable,
  listAll,
  getDownloadURL,
  getMetadata,
  // eslint-disable-next-line import/named
  FullMetadata,
} from 'firebase/storage';
import { app } from './app';

const storage = getStorage(app);

type Metadata = {
  name: string;
  caption?: string;
};

export const uploadFile = (file: File, metadata: Metadata) => {
  const storageRef = ref(storage, metadata.name);
  uploadBytesResumable(storageRef, file, {
    contentType: file.type,
    cacheControl: 'public,max-age=3600',
    customMetadata: metadata,
  });
};

export type FirebaseStorageContent = {
  downloadUrl: string;
  metadata: FullMetadata;
};

export const getFiles = async () => {
  const res = await listAll(ref(storage));
  const promisedFiles = res.items.map(async (item) => {
    const storageRef = ref(storage, item.fullPath);
    const downloadUrl = await getDownloadURL(storageRef);
    const metadata = await getMetadata(storageRef);
    return {
      downloadUrl,
      metadata,
    };
  });
  const files: FirebaseStorageContent[] = await Promise.all(promisedFiles);
  return files;
};
