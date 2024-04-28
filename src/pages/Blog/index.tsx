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
  AudioCaption,
  Header,
  HeaderImage,
  RsvpButton,
  Subtitle,
  Title,
} from './styles/header.styles';
import { Column, Container, Main } from './styles/main.styles';
import { Splash } from './Splash';
import title from '../../assets/awcy.png';
import yaw from '../../assets/yaw.png';

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

  const logOut = () => {
    setCount(0);
    auth.signOut();
  };

  const [splashDone, setSplashDone] = useState(false);

  if (count >= 10 && !user) {
    return <SignIn />;
  }

  if (!content || !splashDone) {
    return <Splash onEnded={() => setSplashDone(true)} />;
  }

  return (
    <>
      <Header>
        <HeaderImage>
          <img src={tee} alt="are we cool yet t-shirt" />
        </HeaderImage>
        <Title
          onClick={() => setCount(count + 1)}
          src={title}
          alt="arewecoolyet.blog"
        />
        <Subtitle src={yaw} alt="YOU'RE ALL WELCOME" />
        <a
          href="https://forms.gle/8dzX8f76mTJm69iw7"
          target="_blank"
          rel="noreferrer"
        >
          <RsvpButton>PLEASE RSVP! CLICK HERE</RsvpButton>
        </a>
        <Audio
          controlsList="nodownload noplaybackrate"
          controls
          src={awcyAudio}
        >
          <track default kind="captions" src={awcyAudio} />
        </Audio>
        <AudioCaption>stu$h Auntie - Pattern [Up]</AudioCaption>
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
