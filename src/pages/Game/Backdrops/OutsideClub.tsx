import { useContext } from 'react';
import bouncer from '../../../assets/bouncer.png';
import outsideClub from '../../../assets/outside-club.jpg';
import arrow from '../../../assets/arrow.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Backdrop, Bouncer, LeftButton } from '../styles/game.styles';
import { Character } from '../components/Character';

export const OutsideClub = () => {
  const { update } = useContext(GameContext);
  const onBouncerClick = () => {
    update({ stage: Stage.INSIDE_CLUB });
  };
  return (
    <>
      <LeftButton
        src={arrow}
        alt="left arrow"
        onClick={() => update({ stage: Stage.HOME })}
      />
      <Backdrop src={outsideClub} alt="club" />
      <Character />
      <Bouncer onClick={onBouncerClick} src={bouncer} alt="bouncer" />
    </>
  );
};
