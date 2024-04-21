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
import { Container, Main } from '../../styles/main.styles';

const LazyContent = lazy(() => import('./LazyContent'));

export const Blog = () => {
  const [count, setCount] = useState(0);
  const user = useContext(UserContext);
  const [content, setContent] = useState<FirebaseStorageContent[] | null>(null);

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      setContent(files);
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
      </Header>
      <Container>
        <Main>
          {user && (
            <FileUpload
              onUpload={(file: FirebaseStorageContent) => {
                setContent([file, ...(content ? content : [])]);
              }}
            />
          )}
          {content &&
            content.map((item: FirebaseStorageContent) => (
              <Suspense key={item.downloadUrl} fallback={<Fallback />}>
                <LazyContent
                  content={item}
                  onDelete={(file: FirebaseStorageContent) => {
                    const newContent = content.filter(
                      (item) => item.downloadUrl !== file.downloadUrl
                    );
                    setContent(newContent);
                  }}
                />
              </Suspense>
            ))}
        </Main>
      </Container>
    </>
  );
};
