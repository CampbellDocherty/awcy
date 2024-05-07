import { SyntheticEvent, useContext, useRef } from 'react';
import dialUp from '../../../assets/aol-dial-up.mp3';
import loginGraphic from '../../../assets/login-graphic.png';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import {
  Form,
  GraphicWrapper,
  LoginGraphic,
  LogoColumn,
} from '../styles/game.styles';
import { v4 as uuidv4 } from 'uuid';

export const Login = () => {
  const { name, update, email } = useContext(GameContext);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) return;
    const id = uuidv4();
    localStorage.setItem('awcyId', id);
    update({ name, stage: Stage.HOME, id });
  };

  const isMobile = window.innerWidth <= 900;

  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (!audioRef) return;
    if (!audioRef.current) return;
    if (!audioRef.current.play) return;
    audioRef.current.play();
  };

  return (
    <>
      <audio ref={audioRef} controls={false} src={dialUp}>
        <track default kind="captions" src={dialUp} />
      </audio>
      <LogoColumn>
        <p>AWCY</p>
        {isMobile && (
          <GraphicWrapper>
            <LoginGraphic src={loginGraphic} alt="aol mock graphic" />
          </GraphicWrapper>
        )}
        <p>version 1.0</p>
      </LogoColumn>
      <Form onSubmit={onSubmit} onClick={() => playAudio()}>
        {!isMobile && (
          <GraphicWrapper>
            <LoginGraphic src={loginGraphic} alt="aol mock graphic" />
          </GraphicWrapper>
        )}
        <label htmlFor="name">Name:</label>
        <input
          required
          id="name"
          onChange={(e) => update({ name: e.target.value })}
          value={name}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          onChange={(e) => update({ email: e.target.value })}
          value={email}
        />
        <button type="submit">Play</button>
      </Form>
    </>
  );
};
