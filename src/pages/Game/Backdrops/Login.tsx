import { SyntheticEvent, useContext } from 'react';
import { Form, LogoColumn } from '../styles/game.styles';
import { GameContext } from '../../../context/Game';
import { Stage } from '../../../context/Game/types';

export const Login = () => {
  const { name, update } = useContext(GameContext);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    update({ name, stage: Stage.HOME });
  };

  return (
    <>
      <LogoColumn>
        <p>AWCY</p>
        <p>version 1.0</p>
      </LogoColumn>
      <Form onSubmit={onSubmit}>
        <label
          style={{ width: '60%', alignSelf: 'center', textAlign: 'left' }}
          htmlFor="name"
        >
          Name:
        </label>
        <input
          style={{ width: '60%', alignSelf: 'center' }}
          required
          id="name"
          onChange={(e) => update({ name: e.target.value })}
          value={name}
        />
        <button type="submit">Play</button>
      </Form>
    </>
  );
};
