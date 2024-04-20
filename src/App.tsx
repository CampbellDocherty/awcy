import { Suspense, lazy, useState } from 'react';
import { Fallback } from './Fallback';
import { Content, blogContent } from './assets/blogImages';
import tee from './assets/tee.png';
import { Header, HeaderImage, Subtitle, Title } from './styles/header.styles';
import { Container, Main } from './styles/main.styles';
import { SignIn } from './SignIn';
import { app } from './firebase/app';

const LazyContent = lazy(() => import('./LazyContent'));

const App = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <Header>
        <HeaderImage>
          <img src={tee} alt="are we cool yet t-shirt" />
        </HeaderImage>
        <Title>arewecoolyet.blog</Title>
        <Subtitle>YOU&apos;RE ALL WELCOME</Subtitle>
      </Header>
      <Container>
        <Main>
          <button onClick={() => setSignIn(true)}>Sign in</button>
          {signIn && app && <SignIn />}
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
