import { UserProvider } from './context/UserProvider';
import { Blog } from './pages/Blog';

const App = () => {
  return (
    <UserProvider>
      <Blog />
    </UserProvider>
  );
};

export default App;
