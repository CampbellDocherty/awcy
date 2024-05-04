import { useContext } from 'react';
import popUp from '../../../assets/bouncer-pop-up.png';
import secondOption from '../../../assets/i-know-the-dj.png';
import firstOption from '../../../assets/obey.png';
import thirdOption from '../../../assets/show-ig.png';
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
  onThirdOptionClick,
}: {
  onClose: () => void;
  onThirdOptionClick: () => void;
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
      <PopUp src={popUp} alt="pop up screen for bouncer" />
      <FirstOption onClick={onFirstOptionClick} src={firstOption} alt="OBEY" />
      <SecondOption
        onClick={onSecondOptionClick}
        src={secondOption}
        alt="I know the dj"
      />
      <ThirdOption
        onClick={onThirdOptionClick}
        src={thirdOption}
        alt="Show my instagram"
      />
    </PopUpContainer>
  );
};
