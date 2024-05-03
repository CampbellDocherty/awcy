import { FirebaseStorageContent } from '../../../firebase/storage';

export const splitArray = (
  content: FirebaseStorageContent[],
  columns: number
) => {
  const flyer = content.find((item) => item.metadata.name === 'flyer');
  const contentWithoutFlyer = content.filter(
    (item) => item.metadata.name !== 'flyer'
  );
  const subarrayLength = Math.floor(content.length / columns);
  const remainder = content.length % columns;
  let start = 0;
  const chunks = [];

  for (let i = 0; i < columns; i++) {
    const end = start + subarrayLength + (i < remainder ? 1 : 0);
    chunks.push(contentWithoutFlyer.slice(start, end));
    start = end;
  }

  if (flyer) {
    const lastElement = chunks[0].pop();
    const lastChunk = chunks.pop();
    if (lastElement && lastChunk) {
      lastChunk.push(lastElement);
      return [[flyer, ...chunks[0]], ...chunks.slice(1), lastChunk];
    }
    return [[flyer, ...chunks[0]], ...chunks.slice(1)];
  }

  return chunks;
};
