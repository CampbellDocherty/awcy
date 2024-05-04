import { useContext, useEffect, useRef, useState } from 'react';
import popUp from '../../../../assets/choose-fit-pop-up.png';
import cupboard from '../../../../assets/cupboard.jpg';
import message from '../../../../assets/message.png';
import phone from '../../../../assets/phone.png';
import home from '../../../../assets/room.jpg';
import smsTone from '../../../../assets/sms-tone.mp3';
import { GameContext } from '../../../../context/Game';
import { Stage } from '../../../../context/Game/types';
import { Character } from '../../components/Character';
import { NextStage } from '../../components/NextStage';
import { PopUpDecision } from '../../components/PopUpDecision';
import { Backdrop, DecisionOption } from '../../styles/game.styles';
import { OutfitType, outfits } from './outfits';
import { Cupboard, Message, Phone } from './styles';

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { update, outfit, health } = useContext(GameContext);

  const [showOutfits, setShowOutfits] = useState<boolean>(false);

  const onCupboardClick = () => {
    update({ health: 2 });
    setShowOutfits(true);
  };

  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (outfit) return;
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
    update({
      mission: 'Get changed and head to the club',
    });
    setMessageSeen(true);
  };

  const onOutfitSelect = (outfit: OutfitType) => {
    setShowOutfits(false);
    update({ health: health + outfit.health, outfit: outfit.src });
  };

  return (
    <>
      <audio ref={audioRef} controls={false} src={smsTone}>
        <track default kind="captions" src={smsTone} />
      </audio>
      {outfit && (
        <NextStage
          right
          onClick={() => update({ stage: Stage.OUTSIDE_CLUB, mission: null })}
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
      {(messageSeen || outfit) && (
        <Cupboard onClick={onCupboardClick} src={cupboard} alt="cupboard" />
      )}
      {showOutfits && (
        <PopUpDecision backgroundSrc={popUp}>
          {outfits.map((outfit) => {
            return (
              <DecisionOption
                key={outfit.alt}
                onClick={() => onOutfitSelect(outfit)}
                src={outfit.optionSrc}
                alt={outfit.alt}
              />
            );
          })}
        </PopUpDecision>
      )}
    </>
  );
};
