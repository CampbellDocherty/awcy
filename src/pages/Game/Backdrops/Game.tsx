import { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import { OutsideClub } from './OutsideClub';
import { Login } from './Login';
import {
  AspectRatioBox,
  GameWindow,
  InnerAspectRatioBox,
  Wrapper,
} from '../styles/game.styles';
import { StatsWrapper } from '../StatsWrapper';
import { Home } from './Home';
import { Mission } from '../components/Mission';
import { InsideClub } from './InsideClub';
import { styled } from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 7%, 0.92);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Game = () => {
  const { health, stage, mission } = useContext(GameContext);

  const modalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile = window.innerWidth <= 500;

  const onClick = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  const onClickModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target || wrapperRef.current === e.target) {
      setIsExpanded(false);
    }
  };

  if (isExpanded) {
    return (
      <Modal ref={modalRef} onClick={onClickModal}>
        <Wrapper ref={wrapperRef}>
          <AspectRatioBox>
            <InnerAspectRatioBox>
              <GameWindow>
                {stage === Stage.LOGIN && <Login />}
                {stage === Stage.OUTSIDE_CLUB && <OutsideClub />}
                {stage === Stage.INSIDE_CLUB && <InsideClub />}
                {stage === Stage.HOME && <Home />}
                {stage !== Stage.LOGIN && <StatsWrapper health={health} />}
                {mission && stage !== Stage.LOGIN && <Mission />}
              </GameWindow>
            </InnerAspectRatioBox>
          </AspectRatioBox>
        </Wrapper>
      </Modal>
    );
  }

  return (
    <Wrapper onClick={onClick}>
      <AspectRatioBox>
        <InnerAspectRatioBox>
          <GameWindow>
            {stage === Stage.LOGIN && <Login />}
            {stage === Stage.OUTSIDE_CLUB && <OutsideClub />}
            {stage === Stage.INSIDE_CLUB && <InsideClub />}
            {stage === Stage.HOME && <Home />}
            {stage !== Stage.LOGIN && <StatsWrapper health={health} />}
            {mission && stage !== Stage.LOGIN && <Mission />}
          </GameWindow>
        </InnerAspectRatioBox>
      </AspectRatioBox>
    </Wrapper>
  );
};
