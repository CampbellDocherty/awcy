export type Stats = {
  health: number;
  clout: number;
};

export enum Stage {
  LOGIN = 'login',
  OUTSIDE_CLUB = 'outside-club',
  INSIDE_CLUB = 'inside-club',
  HOME = 'home',
}

export type Game = {
  name: string;
  stats: Stats | null;
  outfit: string | null;
  stage: Stage;
  mission: string | null;
  update: (newGameState: Partial<Game>) => void;
};
