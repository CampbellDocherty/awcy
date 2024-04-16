import { Header, Subtitle, Title } from './styles/header.styles';
import { Container, Main } from './styles/main.styles';

const App = () => {
  return (
    <>
      <Header>
        <Title>arewecoolyet.blog</Title>
        <Subtitle>YOU&apos;RE ALL WELCOME</Subtitle>
      </Header>
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default App;
