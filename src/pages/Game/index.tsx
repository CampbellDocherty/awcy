import { useContext } from 'react';
import { UserContext } from '../../context/User';
import { Game } from './Backdrops/Game';
import { GameProvider } from '../../context/Game/GameProvider';

export const GameWrapper = () => {
  const user = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};
