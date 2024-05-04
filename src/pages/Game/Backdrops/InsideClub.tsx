import { useContext } from 'react';
import arrow from '../../../assets/arrow.png';
import insideClub from '../../../assets/inside-club.jpg';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Character } from '../components/Character';
import { Backdrop, LeftButton } from '../styles/game.styles';

export const InsideClub = () => {
  const { update } = useContext(GameContext);
  return (
    <>
      <LeftButton
        src={arrow}
        alt="left arrow"
        onClick={() => update({ stage: Stage.OUTSIDE_CLUB })}
      />
      <Backdrop src={insideClub} alt="club" />
      <Character />
    </>
  );
};
