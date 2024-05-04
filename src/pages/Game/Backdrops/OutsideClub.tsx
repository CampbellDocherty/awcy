import { useContext, useEffect, useState } from 'react';
import bouncer from '../../../assets/bouncer.png';
import outsideClub from '../../../assets/outside-club.jpg';
import arrow from '../../../assets/arrow.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  Backdrop,
  Bouncer,
  DecisionOption,
  LeftButton,
} from '../styles/game.styles';
import { Character } from '../components/Character';
import instagram from '../../../assets/following.png';
import { Message } from './Home/styles';
import { PopUpDecision } from '../components/PopUpDecision';
import popUp from '../../../assets/bouncer-pop-up.png';
import firstOption from '../../../assets/obey.png';
import secondOption from '../../../assets/i-know-the-dj.png';
import thirdOption from '../../../assets/show-ig.png';
import { HealthChange } from '../components/HealthChange';

export const OutsideClub = () => {
  const { update, health, hasAccessToClub } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showIg, setShowIg] = useState(false);
  const [hpChange, setHpChange] = useState<number | null>(null);

  const onBouncerClick = () => {
    if (hasAccessToClub) {
      update({
        stage: Stage.INSIDE_CLUB,
      });
    }
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
    setTimeout(() => {
      update({
        mission: null,
        health: health - 2,
        hasAccessToClub: true,
      });
    }, 1000);
  };

  const onFirstOptionClick = () => {
    setShowPopUp(false);
    setHpChange(1);
    update({ mission: null });
    setTimeout(() => {
      update({
        mission: null,
        health: health + 1,
        hasAccessToClub: true,
      });
    }, 1000);
  };

  const onSecondOptionClick = () => {
    setShowPopUp(false);
    setHpChange(-1);
    update({ mission: null });
    setTimeout(() => {
      update({
        mission: null,
        health: health - 1,
        hasAccessToClub: true,
      });
    }, 1000);
  };

  const onThirdOptionClick = () => {
    setShowIg(true);
  };

  return (
    <>
      {hpChange && <HealthChange healthChange={hpChange} />}
      {showPopUp && (
        <PopUpDecision backgroundSrc={popUp}>
          <DecisionOption
            onClick={onFirstOptionClick}
            src={firstOption}
            alt="obey"
          />
          <DecisionOption
            onClick={onSecondOptionClick}
            src={secondOption}
            alt="I know the dj"
          />
          <DecisionOption
            onClick={onThirdOptionClick}
            src={thirdOption}
            alt="show instagram"
          />
        </PopUpDecision>
      )}
      {showIg && (
        <Message
          src={instagram}
          onClick={onExitFollowing}
          alt="instagram followers"
        />
      )}
      <LeftButton
        src={arrow}
        alt="left arrow"
        onClick={() => update({ stage: Stage.HOME, mission: null })}
      />
      <Backdrop src={outsideClub} alt="club" />
      <Character />
      <Bouncer onClick={onBouncerClick} src={bouncer} alt="bouncer" />
    </>
  );
};
