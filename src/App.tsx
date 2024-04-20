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

  if (count >= 10 && !user) {
    return <SignIn />;
  }

  useEffect(() => {
    const get = async () => {
      const files = await getFiles();
      setContent(files);
    };

    get();
  }, []);

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
          {user && <FileUpload />}
          {content &&
            content.map((content: FirebaseStorageContent) => (
              <Suspense key={content.downloadUrl} fallback={<Fallback />}>
                <LazyContent content={content} />
              </Suspense>
            ))}
        </Main>
      </Container>
    </>
  );
};

export default App;
