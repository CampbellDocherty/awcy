// eslint-disable-next-line import/named
import { onAuthStateChanged, User } from 'firebase/auth';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Fallback } from './Fallback';
import { SignIn } from './SignIn';
import { Content, blogContent } from './assets/blogImages';
import tee from './assets/tee.png';
import plus from './assets/plus.svg';
import { auth } from './firebase/app';
import { Header, HeaderImage, Subtitle, Title } from './styles/header.styles';
import { Container, Main, Plus } from './styles/main.styles';
import { FileUpload } from './FileUpload';

const LazyContent = lazy(() => import('./LazyContent'));

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
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
          {user && <FileUpload />}
          {blogContent.map((content: Content) => (
            <Suspense key={content.src} fallback={<Fallback />}>
              <LazyContent content={content} />
            </Suspense>
          ))}
        </Main>
      </Container>
    </>
  );
};

export default App;
