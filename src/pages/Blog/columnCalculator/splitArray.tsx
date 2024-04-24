import { FirebaseStorageContent } from '../../../firebase/storage';

export const splitArray = (
  content: FirebaseStorageContent[],
  columns: number
) => {
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
