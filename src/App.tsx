import { UserProvider } from './context/User';
import { Blog } from './pages/Blog';
import { GameWrapper } from './pages/Game/GameWrapper';

const App = () => {
  return (
    <UserProvider>
      <Blog />
      <GameWrapper />
    </UserProvider>
  );
};

export default App;
