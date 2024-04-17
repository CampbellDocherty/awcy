import { Suspense, lazy } from 'react';
import { Fallback } from './Fallback';
import { Content, blogContent } from './assets/blogImages';
import tee from './assets/tee.png';
import { Header, HeaderImage, Subtitle, Title } from './styles/header.styles';
import { Container, Main } from './styles/main.styles';

const LazyContent = lazy(() => import('./LazyContent'));

const App = () => {
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
