import { useContext, useEffect, useState } from 'react';
import arrow from '../../../assets/arrow.png';
import insideClub from '../../../assets/inside-club.jpg';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Character } from '../components/Character';
import { Backdrop, DecisionOption, LeftButton } from '../styles/game.styles';
import { PopUpDecision } from '../components/PopUpDecision';
import popUp from '../../../assets/inside-club-pop-up.png';
import firstOption from '../../../assets/go-chat.png';
import secondOption from '../../../assets/wave-and-smile.png';
import thirdOption from '../../../assets/keep-moving.png';
import { HealthChange } from '../components/HealthChange';

export const InsideClub = () => {
  const { update, health, hasCompletedClub } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [hpChange, setHpChange] = useState<number | null>(null);

  useEffect(() => {
    if (hasCompletedClub) return;
    setTimeout(() => {
      setShowPopUp(true);
    }, 1000);
  }, []);

  const onClose = () => setShowPopUp(false);

  const onFirstOptionClick = () => {
    onClose();
    setHpChange(1);
    setTimeout(() => {
      update({ health: health + 1, hasCompletedClub: true });
    }, 1500);
  };

  const onSecondOptionClick = () => {
    onClose();
    setHpChange(-1);
    setTimeout(() => {
      update({ health: health - 1, hasCompletedClub: true });
    }, 1500);
  };

  const onThirdOptionClick = () => {
    onClose();
    setHpChange(-2);
    setTimeout(() => {
      update({ health: health - 2, hasCompletedClub: true });
    }, 1500);
  };

  return (
    <>
      {hpChange && <HealthChange healthChange={hpChange} />}
      {showPopUp && (
        <PopUpDecision backgroundSrc={popUp}>
          <DecisionOption
            onClick={onFirstOptionClick}
            src={firstOption}
            alt="go chat"
          />
          <DecisionOption
            onClick={onSecondOptionClick}
            src={secondOption}
            alt="wave and smile"
          />
          <DecisionOption
            onClick={onThirdOptionClick}
            src={thirdOption}
            alt="keep moving"
          />
        </PopUpDecision>
      )}
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
