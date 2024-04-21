import { Blog } from './pages/Blog';
import { UserProvider } from './context/UserProvider';
import { Game } from './pages/Game';

const App = () => {
  return (
    <UserProvider>
      {/* <Blog /> */}
      <Game />
    </UserProvider>
  );
};

export default App;
