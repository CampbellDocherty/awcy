import { UserProvider } from './context/UserProvider';
import { Blog } from './pages/Blog';
// import { Game } from './pages/Game';

const App = () => {
  return (
    <UserProvider>
      <Blog />
      {/* <Game /> */}
    </UserProvider>
  );
};

export default App;
