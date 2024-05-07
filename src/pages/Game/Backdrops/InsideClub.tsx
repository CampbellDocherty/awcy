import { useContext, useEffect, useState } from 'react';
import firstOption from '../../../assets/go-chat.png';
import popUp from '../../../assets/inside-club-pop-up.png';
import insideClub from '../../../assets/inside-club.jpg';
import thirdOption from '../../../assets/keep-moving.png';
import secondOption from '../../../assets/wave-and-smile.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { Character } from '../components/Character';
import { HealthChange } from '../components/HealthChange';
import { NextStage } from '../components/NextStage';
import { PopUpDecision } from '../components/PopUpDecision';
import {
  Backdrop,
  DecisionOption,
  DjOverlay,
  EmanOverlay,
} from '../styles/game.styles';
import { Results } from './Results';
import { Pointer } from '../components/Pointer';

export const InsideClub = () => {
  const { update, health, hasCompletedClub, mission } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [hpChange, setHpChange] = useState<number | null>(null);

  useEffect(() => {
    if (hasCompletedClub) {
      update({ mission: "Talk to the DJ's try to get back stage" });
      return;
    } else {
      update({ mission: 'Chat to your friend E' });
    }
  }, []);

  const onClose = () => setShowPopUp(false);

  const onFirstOptionClick = () => {
    onClose();
    setHpChange(1);
    setTimeout(() => {
      update({
        health: health + 1,
        hasCompletedClub: true,
        mission: "Talk to the DJ's try to get back stage",
      });
    }, 1500);
  };

  const onSecondOptionClick = () => {
    onClose();
    setHpChange(-1);
    setTimeout(() => {
      update({
        health: health - 1,
        hasCompletedClub: true,
        mission: "Talk to the DJ's try to get back stage",
      });
    }, 1500);
  };

  const onThirdOptionClick = () => {
    onClose();
    setHpChange(-2);
    setTimeout(() => {
      update({
        health: health - 2,
        hasCompletedClub: true,
        mission: "Talk to the DJ's try to get back stage",
      });
    }, 1500);
  };

  const onDjClick = () => {
    update({ mission: null });
    setShowResults(true);
  };

  return (
    <>
      {showResults && <Results />}
      {hpChange && <HealthChange healthChange={hpChange} />}
      {mission === 'Chat to your friend E' && (
        <EmanOverlay onClick={() => setShowPopUp(true)}>
          <Pointer />
        </EmanOverlay>
      )}
      {hasCompletedClub && (
        <DjOverlay onClick={onDjClick}>
          <Pointer />
        </DjOverlay>
      )}
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
      <NextStage
        right={false}
        onClick={() => update({ stage: Stage.OUTSIDE_CLUB, mission: null })}
      />
      <Backdrop src={insideClub} alt="club" />
      <Character />
    </>
  );
};
