import { useContext } from 'react';
import bouncer from '../../../assets/bouncer.png';
import character from '../../../assets/character.png';
import club from '../../../assets/club.jpg';
import {
  Backdrop,
  Bouncer,
  Character,
  RightButton,
} from '../styles/game.styles';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';

export const Club = () => {
  const { stage, update } = useContext(GameContext);
  return (
    <>
      <Backdrop src={club} alt="club" />
      <Character $stage={stage} src={character} alt="character" />
      <Bouncer src={bouncer} alt="bouncer" />
      <RightButton onClick={() => update({ stage: Stage.HOME })}>
        {'>'}
      </RightButton>
    </>
  );
};
