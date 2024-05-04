import { createContext } from 'react';
import { Game, Stage } from './types';

export const defaultValues = {
  name: '',
  health: 2,
  outfit: null,
  stage: Stage.LOGIN,
  mission: null,
  hasAccessToClub: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update: () => {},
};

export const GameContext = createContext<Game>(defaultValues);
