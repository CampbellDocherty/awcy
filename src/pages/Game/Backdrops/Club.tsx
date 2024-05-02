import { useContext } from 'react';
import bouncer from '../../../assets/bouncer.png';
import character from '../../../assets/character.png';
import club from '../../../assets/club.jpg';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  Backdrop,
  Bouncer,
  Character,
  LeftButton,
} from '../styles/game.styles';

export const Club = () => {
  const { stage, update } = useContext(GameContext);
  return (
    <>
      <LeftButton onClick={() => update({ stage: Stage.HOME })} />
      <Backdrop src={club} alt="club" />
      <Character $stage={stage} src={character} alt="character" />
      <Bouncer src={bouncer} alt="bouncer" />
    </>
  );
};
