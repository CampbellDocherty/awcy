import { createContext } from 'react';
import { Game, Stage } from './types';

export const defaultValues = {
  id: null,
  name: '',
  email: '',
  health: 2,
  outfit: null,
  stage: Stage.LOGIN,
  mission: null,
  raffleNumber: null,
  hasAccessToClub: false,
  hasCompletedClub: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update: () => {},
};

export const GameContext = createContext<Game>(defaultValues);
