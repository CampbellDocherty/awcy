import { Container } from './Container';
import { UserProvider } from './context/User';

const App = () => {
  return (
    <UserProvider>
      <Container />
    </UserProvider>
  );
};

export default App;
