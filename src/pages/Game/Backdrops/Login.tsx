import { SyntheticEvent, useContext, useEffect, useRef } from 'react';
import {
  Form,
  GraphicWrapper,
  LoginGraphic,
  LogoColumn,
} from '../styles/game.styles';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import loginGraphic from '../../../assets/login-graphic.png';
import dialUp from '../../../assets/aol-dial-up.mp3';

export const Login = () => {
  const { name, update, email } = useContext(GameContext);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) return;
    update({ name, stage: Stage.HOME });
  };

  const isMobile = window.innerWidth <= 568;

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!audioRef) return;
      if (!audioRef.current) return;
      if (!audioRef.current.play) return;
      audioRef.current.play();
    }, 500);
  }, []);

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
      <Form onSubmit={onSubmit}>
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
