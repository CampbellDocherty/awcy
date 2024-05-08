import { ReactNode } from 'react';
import { PopUpImg, PopUpContainer } from '../styles/game.styles';

export const PopUpDecision = ({
  backgroundSrc,
  children,
}: {
  backgroundSrc: string;
  children: ReactNode;
}) => {
  return (
    <PopUpContainer>
      <PopUpImg src={backgroundSrc} alt="pop up screen for bouncer" />
      {children}
    </PopUpContainer>
  );
};
