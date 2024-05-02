import { useContext, useEffect, useRef, useState } from 'react';
import arrow from '../../../assets/arrow.png';
import character from '../../../assets/character.png';
import cupboard from '../../../assets/cupboard.jpg';
import message from '../../../assets/message.png';
import phone from '../../../assets/phone.png';
import home from '../../../assets/room.jpg';
import smsTone from '../../../assets/sms-tone.mp3';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  Backdrop,
  Character,
  Cupboard,
  Message,
  MissionBanner,
  MissionText,
  Outfit,
  OutfitContainer,
  Phone,
  RightButton,
} from '../styles/game.styles';

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { stage, update, stats } = useContext(GameContext);

  const [showOutfits, setShowOutfits] = useState<boolean>(false);

  const onHomeClick = () => {
    update({ stats: null });
    setShowOutfits(true);
  };

  const onOutfitSelect = () => {
    setShowOutfits(false);
    update({ stats: { health: 80, clout: 80 } });
  };

  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!audioRef) return;
      if (!audioRef.current) return;
      if (!audioRef.current.play) return;
      if ('vibrator' in navigator) {
        navigator.vibrate(500);
      }
      setShowPhone(true);
      audioRef.current.play();
    }, 1000);
  }, []);

  const [showMessage, setShowMessage] = useState(false);
  const [messageSeen, setMessageSeen] = useState(false);

  const onClickPhone = () => {
    setShowMessage(true);
  };

  const onClickMessage = () => {
    setShowPhone(false);
    setShowMessage(false);
    setMessageSeen(true);
  };

  return (
    <>
      <audio ref={audioRef} controls={false} src={smsTone}>
        <track default kind="captions" src={smsTone} />
      </audio>
      {stats && (
        <RightButton
          src={arrow}
          alt="right arrow"
          onClick={() => update({ stage: Stage.CLUB })}
        />
      )}
      {showPhone && (
        <Phone onClick={onClickPhone} src={phone} alt="message received" />
      )}
      {showMessage && (
        <Message
          src={message}
          onClick={onClickMessage}
          alt="Yo what are you up to! Come whisky it's live"
        />
      )}
      <Backdrop src={home} alt="home" />
      <Character $stage={stage} src={character} alt="character" />
      {messageSeen && (
        <Cupboard onClick={onHomeClick} src={cupboard} alt="cupboard" />
      )}
      {messageSeen && (
        <MissionBanner>
          <MissionText>Get changed and head to the club</MissionText>
        </MissionBanner>
      )}
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
