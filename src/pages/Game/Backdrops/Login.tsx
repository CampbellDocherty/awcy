import { SyntheticEvent, useContext } from 'react';
import { Form, LoginGraphic, LogoColumn } from '../styles/game.styles';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';
import loginGraphic from '../../../assets/login-graphic.png';

export const Login = () => {
  const { name, update, email } = useContext(GameContext);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) return;
    update({ name, stage: Stage.HOME });
  };

  return (
    <>
      <LogoColumn>
        <p>AWCY</p>
        <p>version 1.0</p>
      </LogoColumn>
      <Form onSubmit={onSubmit}>
        <LoginGraphic src={loginGraphic} alt="aol mock graphic" />
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
