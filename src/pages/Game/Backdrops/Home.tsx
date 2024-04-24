import { useContext, useState } from 'react';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import character from '../../../assets/character.png';
import home from '../../../assets/room.jpg';
import {
  Backdrop,
  Character,
  LeftButton,
  Outfit,
  OutfitContainer,
} from '../styles/game.styles';

export const Home = () => {
  const { stage, update } = useContext(GameContext);

  const [showOutfits, setShowOutfits] = useState<boolean>(false);

  const onHomeClick = () => {
    update({ stats: null });
    setShowOutfits(true);
  };

  const onOutfitSelect = () => {
    setShowOutfits(false);
    update({ stats: { health: 80, clout: 80 } });
  };

  return (
    <>
      <LeftButton onClick={() => update({ stage: Stage.CLUB })}>
        {'<'}
      </LeftButton>
      <Backdrop src={home} alt="home" onClick={onHomeClick} />
      <Character $stage={stage} src={character} alt="character" />
      {showOutfits && (
        <OutfitContainer>
          <Outfit onClick={onOutfitSelect} src="" alt="outfit-1" />
          <Outfit onClick={onOutfitSelect} src="" alt="outfit-2" />
          <Outfit onClick={onOutfitSelect} src="" alt="outfit-3" />
        </OutfitContainer>
      )}
    </>
  );
};
