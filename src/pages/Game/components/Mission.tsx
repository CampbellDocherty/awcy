import { useContext } from 'react';
import { MissionBanner, MissionText } from '../styles/game.styles';
import { GameContext } from '../../../context/Game';

export const Mission = () => {
  const { mission } = useContext(GameContext);
  return (
    <MissionBanner>
      <MissionText>{mission}</MissionText>
    </MissionBanner>
  );
};
