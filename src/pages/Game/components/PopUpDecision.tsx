import { ReactNode } from 'react';
import { PopUp, PopUpContainer } from '../styles/game.styles';

export const PopUpDecision = ({
  backgroundSrc,
  children,
}: {
  backgroundSrc: string;
  children: ReactNode;
}) => {
  return (
    <PopUpContainer>
      <PopUp src={backgroundSrc} alt="pop up screen for bouncer" />
      {children}
    </PopUpContainer>
  );
};
