import { Header, HeaderImage, Subtitle, Title } from './styles/header.styles';
import { Container, Main } from './styles/main.styles';
import tee from './assets/tee.png';
import { blogImages } from './assets/blogImages';
import { Article, Section, BlogImage } from './styles/image.styles';

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
          {blogImages.map((image, index) => (
            <Article key={index}>
              <Section>
                <BlogImage src={image} alt="blog post" />
              </Section>
            </Article>
          ))}
        </Main>
      </Container>
    </>
  );
};

export default App;
