import { ReactNode, useCallback, useState } from 'react';

import { defaultValues, GameContext } from './GameContext';
import { Game } from './types';

export const GameProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [gameState, setGameState] = useState<Game>(defaultValues);

  const update = useCallback(
    (newGameState: Partial<Game>) => {
      setGameState({ ...gameState, ...newGameState });
    },
    [setGameState, gameState]
  );

  const providerValue = {
    ...gameState,
    update,
  };

  console.log('gameState', providerValue);

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};
