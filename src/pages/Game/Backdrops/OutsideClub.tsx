import { useContext, useEffect, useState } from 'react';
import bouncer from '../../../assets/bouncer.png';
import outsideClub from '../../../assets/outside-club.jpg';
import arrow from '../../../assets/arrow.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  Backdrop,
  Bouncer,
  FirstOption,
  LeftButton,
  PopUp,
  PopUpContainer,
  SecondOption,
  ThirdOption,
} from '../styles/game.styles';
import { Character } from '../components/Character';
import popUp from '../../../assets/bouncer-pop-up.png';
import firstOption from '../../../assets/obey.png';
import secondOption from '../../../assets/i-know-the-dj.png';
import thirdOption from '../../../assets/show-ig.png';
import instagram from '../../../assets/following.png';
import { Message } from './Home/styles';

export const OutsideClub = () => {
  const { update } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showIg, setShowIg] = useState(false);

  const onBouncerClick = () => {
    setShowPopUp(true);
  };

  useEffect(() => {
    update({
      mission: 'Talk to the bouncer',
    });
  }, []);

  const onFirstOptionClick = () => {
    setShowPopUp(false);
    update({
      stage: Stage.INSIDE_CLUB,
      mission: null,
      stats: { health: 3, clout: 0 },
    });
  };

  const onSecondOptionClick = () => {
    setShowPopUp(false);
    update({
      stage: Stage.INSIDE_CLUB,
      mission: null,
      stats: { health: 1, clout: 0 },
    });
  };

  const onThirdOptionClick = () => {
    setShowIg(true);
    setShowPopUp(false);
  };

  const onExitFollowing = () => {
    setShowIg(false);
    update({
      stage: Stage.INSIDE_CLUB,
      mission: null,
      stats: { health: 0, clout: 1 },
    });
  };

  return (
    <>
      {showPopUp && (
        <PopUpContainer>
          <PopUp src={popUp} alt="pop up screen for bouncer" />
          <FirstOption
            onClick={onFirstOptionClick}
            src={firstOption}
            alt="obey"
          />
          <SecondOption
            onClick={onSecondOptionClick}
            src={secondOption}
            alt="I know the dj"
          />
          <ThirdOption
            onClick={onThirdOptionClick}
            src={thirdOption}
            alt="show instagram"
          />
        </PopUpContainer>
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
