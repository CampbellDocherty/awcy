import { Suspense, lazy } from 'react';
import { Header, HeaderImage, Subtitle, Title } from './styles/header.styles';
import { Container, Main } from './styles/main.styles';
import tee from './assets/tee.png';
import { blogImages } from './assets/blogImages';
import { Fallback } from './Fallback';

const LazyImage = lazy(() => import('./LazyImage'));

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
          {blogImages.map((image) => (
            <Suspense key={image} fallback={<Fallback />}>
              <LazyImage src={image} />
            </Suspense>
          ))}
        </Main>
      </Container>
    </>
  );
};

export default App;
