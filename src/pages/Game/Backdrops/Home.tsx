import { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import character from '../../../assets/character.png';
import home from '../../../assets/room.jpg';
import {
  Backdrop,
  Character,
  LeftButton,
  MessageReceived,
  Outfit,
  OutfitContainer,
} from '../styles/game.styles';
import smsTone from '../../../assets/sms-tone.mp3';
import messageReceived from '../../../assets/message.png';

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
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

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!audioRef) return;
    setTimeout(() => {
      try {
        navigator.vibrate(200);
      } catch {
        console.log('No vibrator');
      }
      setShowMessage(true);
      audioRef?.current?.play();
    }, 1000);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        controlsList="nodownload noplaybackrate"
        controls={false}
        src={smsTone}
      >
        <track default kind="captions" src={smsTone} />
      </audio>
      <LeftButton onClick={() => update({ stage: Stage.CLUB })}>
        {'<'}
      </LeftButton>
      {showMessage && (
        <MessageReceived src={messageReceived} alt="message received" />
      )}
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
