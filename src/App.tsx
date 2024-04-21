import { Blog } from './pages/Blog';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Blog />
    </UserProvider>
  );
};

export default App;
