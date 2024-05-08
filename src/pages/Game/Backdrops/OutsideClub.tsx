import { useContext, useEffect, useState } from 'react';
import instagram from '../../../assets/following.png';
import outsideClub from '../../../assets/outside-club.jpg';
import popUp1 from '../../../assets/pop-up-outside-club-1.png';
import popUp2 from '../../../assets/pop-up-outside-club-2.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Character } from '../components/Character';
import { HealthChange } from '../components/HealthChange';
import { NextStage } from '../components/NextStage';
import { Pointer } from '../components/Pointer';
import { PopUp } from '../components/PopUp';
import { Backdrop, BouncerOverlay } from '../styles/game.styles';
import { Message } from './Home/styles';

export const OutsideClub = () => {
  const { update, health, hasAccessToClub } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showIg, setShowIg] = useState(false);
  const [showBouncer, setShowBouncer] = useState(true);
  const [hpChange, setHpChange] = useState<number | null>(null);

  const onBouncerClick = () => {
    setShowPopUp(true);
  };

  useEffect(() => {
    if (hasAccessToClub) return;
    update({
      mission: 'Talk to the bouncer',
    });
  }, []);

  const onExitFollowing = () => {
    setShowIg(false);
    setShowPopUp(false);
    setHpChange(-2);
    update({ mission: null });
    setShowBouncer(false);
    setTimeout(() => {
      update({
        mission: null,
        health: health - 2,
        hasAccessToClub: true,
      });
    }, 1500);
  };

  const onFirstOptionClick = () => {
    setShowPopUp(false);
    setHpChange(1);
    update({ mission: null });
    setShowBouncer(false);
    setTimeout(() => {
      update({
        mission: null,
        health: health + 1,
        hasAccessToClub: true,
      });
    }, 1500);
  };

  const onSecondOptionClick = () => {
    setShowPopUp(false);
    setHpChange(-1);
    update({ mission: null });
    setShowBouncer(false);
    setTimeout(() => {
      update({
        mission: null,
        health: health - 1,
        hasAccessToClub: true,
      });
    }, 1500);
  };

  const onThirdOptionClick = () => {
    setShowIg(true);
  };

  return (
    <>
      {hpChange && <HealthChange healthChange={hpChange} />}
      <NextStage
        right={false}
        onClick={() => update({ stage: Stage.HOME, mission: null })}
      />
      {hasAccessToClub && (
        <NextStage right onClick={() => update({ stage: Stage.INSIDE_CLUB })} />
      )}
      {showPopUp && (
        <PopUp
          popUps={[popUp1, popUp2]}
          onFirstOptionClick={onFirstOptionClick}
          onSecondOptionClick={onSecondOptionClick}
          onThirdOptionClick={onThirdOptionClick}
        />
      )}
      {showIg && (
        <Message
          src={instagram}
          onClick={onExitFollowing}
          alt="instagram followers"
        />
      )}
      <Backdrop src={outsideClub} alt="club" />
      <Character />
      {!hasAccessToClub && showBouncer && (
        <BouncerOverlay onClick={onBouncerClick}>
          <Pointer />
        </BouncerOverlay>
      )}
    </>
  );
};
