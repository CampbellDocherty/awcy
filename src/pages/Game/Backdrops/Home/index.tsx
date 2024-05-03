import { useContext, useEffect, useRef, useState } from 'react';
import cupboard from '../../../../assets/cupboard.jpg';
import message from '../../../../assets/message.png';
import phone from '../../../../assets/phone.png';
import home from '../../../../assets/room.jpg';
import smsTone from '../../../../assets/sms-tone.mp3';
import { GameContext } from '../../../../context/Game';
import { Stage } from '../../../../context/Game/types';
import { Backdrop } from '../../styles/game.styles';
import { Cupboard, Message, Outfit, OutfitContainer, Phone } from './styles';
import { NextStage } from '../../components/NextStage';
import { Character } from '../../components/Character';
import { outfits, OutfitType } from './outfits';

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { update, stats } = useContext(GameContext);

  const [showOutfits, setShowOutfits] = useState<boolean>(false);

  const onCupboardClick = () => {
    update({ stats: null });
    setShowOutfits(true);
  };

  const onOutfitSelect = (outfit: OutfitType) => {
    setShowOutfits(false);
    update({ stats: outfit.stats, outfit: outfit.src });
  };

  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (stats) return;
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
    update({ mission: 'Get changed and head to the club' });
    setMessageSeen(true);
  };

  return (
    <>
      <audio ref={audioRef} controls={false} src={smsTone}>
        <track default kind="captions" src={smsTone} />
      </audio>
      {stats && (
        <NextStage
          right
          onClick={() => update({ stage: Stage.CLUB, mission: null })}
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
      <Character />
      {(messageSeen || stats) && (
        <Cupboard onClick={onCupboardClick} src={cupboard} alt="cupboard" />
      )}
      {showOutfits && (
        <OutfitContainer>
          {outfits.map((outfit) => {
            return (
              <Outfit
                key={outfit.src}
                onClick={() => onOutfitSelect(outfit)}
                src={outfit.src}
                alt={outfit.alt}
              />
            );
          })}
        </OutfitContainer>
      )}
    </>
  );
};
