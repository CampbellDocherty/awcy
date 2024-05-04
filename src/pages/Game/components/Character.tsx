import { useContext } from 'react';
import character from '../../../assets/character.png';
import { GameContext } from '../../../context/Game';
import { Character as CharacterStyle } from '../styles/game.styles';
import { Stage } from '../../../context/Game/types';

const homeStyle = {
  width: '25%',
  height: '38%',
};

const outsideClubStyle = {
  width: '15%',
  height: '24%',
};

const insideClubStyle = {
  width: '20%',
  height: '30%',
  left: '5%',
};

const getStyles = (stage: Stage) => {
  if (stage === Stage.INSIDE_CLUB) {
    return insideClubStyle;
  }

  if (stage === Stage.OUTSIDE_CLUB) {
    return outsideClubStyle;
  }

  return homeStyle;
};

export const Character = () => {
  const { stage, outfit } = useContext(GameContext);
  const src = outfit || character;
  const style = getStyles(stage);
  return (
    <CharacterStyle style={style} $stage={stage} src={src} alt="character" />
  );
};
