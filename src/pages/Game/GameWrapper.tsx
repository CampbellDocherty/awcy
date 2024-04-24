import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Game } from './Game';

export const GameWrapper = () => {
  const user = useContext(UserContext);

  if (!user) {
    return null;
  }

  return <Game />;
};
