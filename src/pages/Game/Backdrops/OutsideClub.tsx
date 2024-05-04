import { useContext, useEffect, useState } from 'react';
import bouncer from '../../../assets/bouncer.png';
import outsideClub from '../../../assets/outside-club.jpg';
import arrow from '../../../assets/arrow.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Backdrop, Bouncer, LeftButton } from '../styles/game.styles';
import { Character } from '../components/Character';
import instagram from '../../../assets/following.png';
import { Message } from './Home/styles';
import { PopUpDecision } from '../components/PopUpDecision';
import popUp from '../../../assets/bouncer-pop-up.png';
import firstOption from '../../../assets/obey.png';
import secondOption from '../../../assets/i-know-the-dj.png';
import thirdOption from '../../../assets/show-ig.png';

export const OutsideClub = () => {
  const { update, health, hasAccessToClub } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showIg, setShowIg] = useState(false);

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
    update({
      stage: Stage.INSIDE_CLUB,
      mission: null,
      health: health - 2,
      hasAccessToClub: true,
    });
  };

  const onThirdOptionClick = () => {
    setShowIg(true);
  };

  return (
    <>
      {showPopUp && (
        <PopUpDecision
          backgroundSrc={popUp}
          firstOptionSrc={firstOption}
          secondOptionSrc={secondOption}
          thirdOptionSrc={thirdOption}
          onClose={() => setShowPopUp(false)}
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
