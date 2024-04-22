import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import tee from '../../assets/tee.png';
import { Fallback } from './Fallback';
import { FileUpload } from './FileUpload';
import { SignIn } from './SignIn';
import { UserContext } from '../../context/UserContext';
import { FirebaseStorageContent, getFiles } from '../../firebase/storage';
import {
  Header,
  HeaderImage,
  Subtitle,
  Title,
} from '../../styles/header.styles';
import { Column, Container, Main } from '../../styles/main.styles';
import * as _ from 'lodash';

const LazyContent = lazy(() => import('./LazyContent'));

export const Blog = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);
  const [content, setContent] = useState<Array<
    FirebaseStorageContent[]
  > | null>(null);

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      const chunked = _.chunk(files, 3);
      setContent(chunked);
    };

    get();
  }, []);

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