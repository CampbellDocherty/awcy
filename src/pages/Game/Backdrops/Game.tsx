import { useContext } from 'react';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { OutsideClub } from './OutsideClub';
import { Login } from './Login';
import {
  AspectRatioBox,
  GameWindow,
  InnerAspectRatioBox,
  Wrapper,
} from '../styles/game.styles';
import { StatsWrapper } from '../StatsWrapper';
import { Home } from './Home';
import { Mission } from '../components/Mission';
import { InsideClub } from './InsideClub';

export const Game = () => {
  const { stats, stage, mission } = useContext(GameContext);

  return (
    <Wrapper>
      <AspectRatioBox>
        <InnerAspectRatioBox>
          <GameWindow>
            {stage === Stage.LOGIN && <Login />}
            {stage === Stage.OUTSIDE_CLUB && <OutsideClub />}
            {stage === Stage.INSIDE_CLUB && <InsideClub />}
            {stage === Stage.HOME && <Home />}
            {stats && stage !== Stage.LOGIN && <StatsWrapper stats={stats} />}
            {mission && stage !== Stage.LOGIN && <Mission />}
          </GameWindow>
        </InnerAspectRatioBox>
      </AspectRatioBox>
    </Wrapper>
  );
};
