import {
  getStorage,
  ref,
  uploadBytesResumable,
  listAll,
  getDownloadURL,
  getMetadata,
  // eslint-disable-next-line import/named
  FullMetadata,
  deleteObject,
  updateMetadata,
} from 'firebase/storage';
import { app } from './app';

const storage = getStorage(app);

type Metadata = {
  name: string;
  caption?: string;
};

export type FirebaseStorageContent = {
  downloadUrl: string;
  metadata: FullMetadata;
};

export const uploadFile = async (file: File, metadata: Metadata) => {
  const storageRef = ref(storage, metadata.name);
  const uploadTask = uploadBytesResumable(storageRef, file, {
    contentType: file.type,
    cacheControl: 'public,max-age=3600',
    customMetadata: metadata,
  });

  const content = await uploadTask.then(async (snapshot) => {
    const downloadUrl = await getDownloadURL(snapshot.ref);
    const metadata = snapshot.metadata;
    return {
      downloadUrl,
      metadata,
    };
  });
  return content as FirebaseStorageContent;
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

export const deleteFile = async (name: string) => {
  const storageRef = ref(storage, name);
  await deleteObject(storageRef);
};

export const updateCaption = async (name: string, caption: string) => {
  const storageRef = ref(storage, name);
  await updateMetadata(storageRef, {
    customMetadata: {
      caption,
    },
  });
};

export const pinFile = async (name: string, pinned: boolean) => {
  const storageRef = ref(storage, name);
  await updateMetadata(storageRef, {
    customMetadata: {
      pinned: pinned ? 'true' : 'false',
      pinnedAt: `${Date.now()}`,
    },
  });
};
