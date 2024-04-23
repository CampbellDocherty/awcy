import * as _ from 'lodash';
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import awcyAudio from '../../assets/awcy.mp3';
import tee from '../../assets/tee.png';
import { UserContext } from '../../context/UserContext';
import { FirebaseStorageContent, getFiles } from '../../firebase/storage';
import {
  Audio,
  Header,
  HeaderImage,
  Subtitle,
  Title,
} from '../../styles/header.styles';
import { Column, Container, Main } from '../../styles/main.styles';
import { Fallback } from './Fallback';
import { FileUpload } from './FileUpload';
import { SignIn } from './SignIn';

const LazyContent = lazy(() => import('./LazyContent'));

const calculateHowManyColumns = () => {
  if (window.innerWidth <= 660) {
    return 2;
  }
  if (window.innerWidth <= 990) {
    return 3;
  }
  return 4;
};

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
      const chunked = _.chunk(files, Math.ceil(files.length / columns));
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

    const splitArrays = _.chunk(
      content.flat(),
      Math.ceil(content.flat().length / columns)
    );
    setContent(splitArrays);
  }, [columns]);

  if (count >= 10 && !user) {
    return <SignIn />;
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
