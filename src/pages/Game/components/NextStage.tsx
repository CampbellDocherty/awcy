import arrow from '../../../assets/arrow.png';
import { LeftButton, RightButton } from '../styles/game.styles';

export const NextStage = ({
  onClick,
  right = false,
}: {
  onClick: () => void;
  right: boolean;
}) => {
  if (right) {
    return <RightButton src={arrow} alt="right arrow" onClick={onClick} />;
  }

  return <LeftButton src={arrow} alt="left arrow" onClick={onClick} />;
};
