import { useContext } from 'react';
import bouncer from '../../../assets/bouncer.png';
import character from '../../../assets/character.png';
import club from '../../../assets/club.jpg';
import arrow from '../../../assets/arrow.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  Backdrop,
  Bouncer,
  Character,
  LeftButton,
} from '../styles/game.styles';

export const Club = () => {
  const { stage, update, outfit } = useContext(GameContext);
  return (
    <>
      <LeftButton
        src={arrow}
        alt="left arrow"
        onClick={() => update({ stage: Stage.HOME })}
      />
      <Backdrop src={club} alt="club" />
      {outfit ? (
        <Character $stage={stage} src={outfit} alt="character" />
      ) : (
        <Character $stage={stage} src={character} alt="character" />
      )}
      <Bouncer src={bouncer} alt="bouncer" />
    </>
  );
};
