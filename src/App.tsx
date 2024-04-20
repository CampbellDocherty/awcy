// eslint-disable-next-line import/named
import { onAuthStateChanged, User } from 'firebase/auth';
import { lazy, Suspense, useEffect, useState } from 'react';
import tee from './assets/tee.png';
import { Fallback } from './Fallback';
import { FileUpload } from './FileUpload';
import { auth } from './firebase/app';
import { FirebaseStorageContent, getFiles } from './firebase/storage';
import { SignIn } from './SignIn';
import { Header, HeaderImage, Subtitle, Title } from './styles/header.styles';
import { Container, Main } from './styles/main.styles';

const LazyContent = lazy(() => import('./LazyContent'));

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [content, setContent] = useState<FirebaseStorageContent[] | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

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
                  user={user}
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

export default App;
