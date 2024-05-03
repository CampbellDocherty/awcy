import { useContext } from 'react';
import bouncer from '../../../assets/bouncer.png';
import club from '../../../assets/club.jpg';
import arrow from '../../../assets/arrow.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Backdrop, Bouncer, LeftButton } from '../styles/game.styles';
import { Character } from './Character';

export const Club = () => {
  const { update } = useContext(GameContext);
  return (
    <>
      <LeftButton
        src={arrow}
        alt="left arrow"
        onClick={() => update({ stage: Stage.HOME })}
      />
      <Backdrop src={club} alt="club" />
      <Character />
      <Bouncer src={bouncer} alt="bouncer" />
    </>
  );
};
