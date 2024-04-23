import { UserProvider } from './context/UserProvider';
import { Blog } from './pages/Blog';
import { Game } from './pages/Game';

const App = () => {
  return (
    <UserProvider>
      <Game />
      {/* <Blog /> */}
    </UserProvider>
  );
};

export default App;
