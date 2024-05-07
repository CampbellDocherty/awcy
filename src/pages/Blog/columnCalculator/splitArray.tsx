import { FirebaseStorageContent } from '../../../firebase/storage';

const chunkArray = (content: FirebaseStorageContent[], columns: number) => {
  const subarrayLength = Math.floor(content.length / columns);
  const remainder = content.length % columns;
  let start = 0;
  const chunks = [];

  for (let i = 0; i < columns; i++) {
    const end = start + subarrayLength + (i < remainder ? 1 : 0);
    chunks.push(content.slice(start, end));
    start = end;
  }

  return chunks;
};

export const splitArray = (
  content: FirebaseStorageContent[],
  columns: number
) => {
  const pinnedFiles = content
    .filter((file) => file.metadata.customMetadata?.pinned === 'true')
    .sort((a, b) => {
      if (
        !a.metadata.customMetadata?.pinnedAt ||
        !b.metadata.customMetadata?.pinnedAt
      ) {
        return 0;
      }
      return (
        parseInt(a.metadata.customMetadata.pinnedAt) -
        parseInt(b.metadata.customMetadata.pinnedAt)
      );
    });
  const nonPinnedFiles = content.filter(
    (file) => file.metadata.customMetadata?.pinned !== 'true'
  );
  const splitPinned = chunkArray(pinnedFiles, columns);
  const splitUnpinned = chunkArray(nonPinnedFiles, columns);

  const mergedArray = splitPinned.map((subArray, index) =>
    subArray.concat(splitUnpinned[index])
  );
  return mergedArray;
};
