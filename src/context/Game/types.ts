export enum Stage {
  LOGIN = 'login',
  OUTSIDE_CLUB = 'outside-club',
  INSIDE_CLUB = 'inside-club',
  HOME = 'home',
}

export type Game = {
  name: string;
  health: number;
  outfit: string | null;
  stage: Stage;
  mission: string | null;
  hasAccessToClub: boolean;
  update: (newGameState: Partial<Game>) => void;
};
