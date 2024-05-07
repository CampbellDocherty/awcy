import { ReactNode, useCallback, useMemo, useState } from 'react';

import { defaultValues, GameContext } from './GameContext';
import { Game } from './types';

export const GameProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [gameState, setGameState] = useState<Game>(defaultValues);

  const previousRaffleNumber = localStorage.getItem('raffleNumber');
  const previousId = localStorage.getItem('awcyId');

  const update = useCallback(
    (newGameState: Partial<Game>) => {
      setGameState({ ...gameState, ...newGameState });
    },
    [gameState]
  );

  const providerValue = {
    ...gameState,
    update,
    raffleNumber: previousRaffleNumber,
    id: previousId,
  };

  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};
