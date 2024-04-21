import { Blog } from './Blog';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <UserProvider>
      <Blog />
    </UserProvider>
  );
};

export default App;
