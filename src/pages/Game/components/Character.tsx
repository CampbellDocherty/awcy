import { useContext } from 'react';
import character from '../../../assets/character.png';
import { GameContext } from '../../../context/Game';
import { Character as CharacterStyle } from '../styles/game.styles';
import { Stage } from '../../../context/Game/types';

const homeStyle = {
  width: '25%',
  height: '38%',
};

const clubStyle = {
  width: '15%',
  height: '24%',
};

export const Character = () => {
  const { stage, outfit } = useContext(GameContext);
  const src = outfit || character;
  const style = stage === Stage.CLUB ? clubStyle : homeStyle;
  return (
    <CharacterStyle style={style} $stage={stage} src={src} alt="character" />
  );
};
