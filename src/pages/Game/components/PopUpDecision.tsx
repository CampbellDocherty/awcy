import { useContext } from 'react';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  FirstOption,
  PopUp,
  PopUpContainer,
  SecondOption,
  ThirdOption,
} from '../styles/game.styles';

export const PopUpDecision = ({
  onClose,
  backgroundSrc,
  firstOptionSrc,
  secondOptionSrc,
  thirdOptionSrc,
  onThirdOptionClick,
}: {
  onClose: () => void;
  onThirdOptionClick: () => void;
  backgroundSrc: string;
  firstOptionSrc: string;
  secondOptionSrc: string;
  thirdOptionSrc: string;
}) => {
  const { update, health } = useContext(GameContext);
  const onFirstOptionClick = () => {
    onClose();
    update({
      stage: Stage.INSIDE_CLUB,
      mission: null,
      health: health + 1,
      hasAccessToClub: true,
    });
  };

  const onSecondOptionClick = () => {
    onClose();
    update({
      stage: Stage.INSIDE_CLUB,
      mission: null,
      health: health - 1,
      hasAccessToClub: true,
    });
  };

  return (
    <PopUpContainer>
      <PopUp src={backgroundSrc} alt="pop up screen for bouncer" />
      <FirstOption
        onClick={onFirstOptionClick}
        src={firstOptionSrc}
        alt="OBEY"
      />
      <SecondOption
        onClick={onSecondOptionClick}
        src={secondOptionSrc}
        alt="I know the dj"
      />
      <ThirdOption
        onClick={onThirdOptionClick}
        src={thirdOptionSrc}
        alt="Show my instagram"
      />
    </PopUpContainer>
  );
};
