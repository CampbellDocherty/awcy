import { useContext, useEffect, useState } from 'react';
import arrow from '../../../assets/arrow.png';
import firstOption from '../../../assets/go-chat.png';
import popUp from '../../../assets/inside-club-pop-up.png';
import insideClub from '../../../assets/inside-club.jpg';
import thirdOption from '../../../assets/keep-moving.png';
import waaw from '../../../assets/waaw.jpg';
import secondOption from '../../../assets/wave-and-smile.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { StatsWrapper } from '../StatsWrapper';
import { Character } from '../components/Character';
import { HealthChange } from '../components/HealthChange';
import { PopUpDecision } from '../components/PopUpDecision';
import {
  Backdrop,
  DecisionOption,
  Djs,
  LeftButton,
  ResultContainer,
  ResultContainerInner,
  ResultSubtitle,
  ResultTitle,
} from '../styles/game.styles';
import { OutfitContainer } from './Home/styles';

export const InsideClub = () => {
  const { update, health, hasCompletedClub, mission } = useContext(GameContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [hpChange, setHpChange] = useState<number | null>(null);

  useEffect(() => {
    if (hasCompletedClub) {
      update({ mission: "Talk to the DJ's try to get back stage" });
      return;
    }
    setTimeout(() => {
      setShowPopUp(true);
    }, 1000);
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
      {showResults && (
        <OutfitContainer>
          <ResultContainer>
            <ResultContainerInner>
              <StatsWrapper health={health} />
              <ResultTitle $win={false}>Game over</ResultTitle>
              <ResultSubtitle>
                Ouch! The DJ&apos;s think you&apos;re doing too much, your night
                ends here
              </ResultSubtitle>
            </ResultContainerInner>
          </ResultContainer>
        </OutfitContainer>
      )}
      {hpChange && <HealthChange healthChange={hpChange} />}
      {hasCompletedClub && <Djs onClick={onDjClick} src={waaw} alt="dj's" />}
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
        onClick={() => update({ stage: Stage.OUTSIDE_CLUB, mission: null })}
      />
      <Backdrop src={insideClub} alt="club" />
      <Character />
    </>
  );
};
