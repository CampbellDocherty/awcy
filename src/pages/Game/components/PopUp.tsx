import { useState } from 'react';
import rightArrow from '../../../assets/right-arrow-pixel.png';
import {
  FirstDecisionOptionOverlay,
  OptionBlocker,
  PopUpImg,
  PopUpContainer,
  RightArrowImg,
  SecondDecisionOptionOverlay,
  ThirdDecisionOptionOverlay,
} from '../styles/game.styles';

export const PopUp = ({
  popUps,
  onFirstOptionClick,
  onSecondOptionClick,
  onThirdOptionClick,
}: {
  popUps: string[];
  onFirstOptionClick: () => void;
  onSecondOptionClick: () => void;
  onThirdOptionClick: () => void;
}) => {
  const [index, setIndex] = useState(0);

  const onClick = () => {
    if (index === popUps.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  const isAtLastPopUp = index === popUps.length - 1;
  return (
    <PopUpContainer>
      {!isAtLastPopUp && (
        <RightArrowImg onClick={onClick} src={rightArrow} alt="right arrow" />
      )}
      <PopUpImg src={popUps[index]} alt="pop up screen for bouncer" />
      {isAtLastPopUp ? (
        <>
          <FirstDecisionOptionOverlay onClick={onFirstOptionClick} />
          <SecondDecisionOptionOverlay onClick={onSecondOptionClick} />
          <ThirdDecisionOptionOverlay onClick={onThirdOptionClick} />
        </>
      ) : (
        <OptionBlocker />
      )}
    </PopUpContainer>
  );
};
