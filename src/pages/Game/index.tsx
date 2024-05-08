import { GameProvider } from '../../context/Game/GameProvider';
import { Game } from './Backdrops/Game';

export const GameWrapper = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};
