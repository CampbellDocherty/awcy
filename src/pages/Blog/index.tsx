import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import awcyAudio from '../../assets/awcy.mp3';
import tee from '../../assets/tee.png';
import { UserContext } from '../../context/User';
import { auth } from '../../firebase/app';
import { FirebaseStorageContent, getFiles } from '../../firebase/storage';
import { Fallback } from './Fallback';
import { FileUpload } from './FileUpload';
import { SignIn } from './SignIn';
import { calculateHowManyColumns } from './columnCalculator/calculateHowManyColumns';
import { splitArray } from './columnCalculator/splitArray';
import {
  Audio,
  Header,
  HeaderImage,
  Subtitle,
  Title,
} from './styles/header.styles';
import { Column, Container, Main } from './styles/main.styles';
import { Splash } from './Splash';

const LazyContent = lazy(() => import('./LazyContent'));

export const Blog = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);
  const [columns, setColumns] = useState(calculateHowManyColumns());
  const [content, setContent] = useState<Array<
    FirebaseStorageContent[]
  > | null>(null);

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      const chunked = splitArray(files, columns);
      setContent(chunked);
    };

    get();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newColumns = calculateHowManyColumns();
      setColumns(newColumns);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!content) {
      return;
    }

    const splitArrays = splitArray(content.flat(), columns);
    setContent(splitArrays);
  }, [columns]);

  if (count >= 10 && !user) {
    return <SignIn />;
  }

  const logOut = () => {
    setCount(0);
    auth.signOut();
  };

  const [FPS, setFPS] = useState<number | null>(null);
  useEffect(() => {
    requestAnimationFrame((t1) =>
      requestAnimationFrame((t2) => setFPS(1000 / (t2 - t1)))
    );
  }, []);

  const [splashDone, setSplashDone] = useState(false);
  if (!content || !splashDone || (FPS && FPS < 70)) {
    return <Splash onEnded={() => setSplashDone(true)} />;
  }

  return (
    <>
      <Header>
        <HeaderImage onClick={() => setCount(count + 1)}>
          <img src={tee} alt="are we cool yet t-shirt" />
        </HeaderImage>
        <Title onClick={() => setCount(count + 1)}>arewecoolyet.blog</Title>
        <Subtitle>YOU&apos;RE ALL WELCOME</Subtitle>
        <Audio
          controlsList="nodownload noplaybackrate"
          controls
          src={awcyAudio}
        >
          <track default kind="captions" src={awcyAudio} />
        </Audio>
        {user && (
          <>
            <FileUpload
              onUpload={(file: FirebaseStorageContent) => {
                if (!content) {
                  setContent([[file]]);
                  return;
                }
                const lastContent = content[content.length - 1];
                setContent([...content.slice(0, -1), [...lastContent, file]]);
              }}
            />
            <button onClick={logOut}>Log out</button>
          </>
        )}
      </Header>
      <Container>
        <Main>
          {content &&
            content.map((list) => {
              return (
                <Column key={list[0].downloadUrl}>
                  {list.map((item: FirebaseStorageContent) => (
                    <Suspense key={item.downloadUrl} fallback={<Fallback />}>
                      <LazyContent
                        content={item}
                        onDelete={(file: FirebaseStorageContent) => {
                          const newContent = content.map((list) =>
                            list.filter((item) => item !== file)
                          );
                          setContent(newContent);
                        }}
                      />
                    </Suspense>
                  ))}
                </Column>
              );
            })}
        </Main>
      </Container>
    </>
  );
};
