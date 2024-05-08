import { useEffect, useState } from 'react';
import { FirebaseStorageContent, getFiles } from './firebase/storage';
import { Blog } from './pages/Blog';
import { Splash } from './pages/Blog/Splash';
import { GameWrapper } from './pages/Game';

export const Container = () => {
  const [content, setContent] = useState<FirebaseStorageContent[] | null>(null);
  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      setContent(files);
    };

    get();
  }, []);

  const [splashDone, setSplashDone] = useState(false);

  if (!content || !splashDone) {
    return <Splash onEnded={() => setSplashDone(true)} />;
  }

  return (
    <>
      <Blog files={content} />
      <GameWrapper />
    </>
  );
};
