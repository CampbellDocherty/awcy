import { SyntheticEvent } from 'react';
import { Main, Container } from '../../styles/main.styles';
import { Form, GameWindow, LogoColumn } from '../../styles/game.styles';

export const Game = () => {
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Main>
        <GameWindow>
          <LogoColumn>
            <p>AWCY</p>
            <p>version 1.0</p>
          </LogoColumn>
          <Form onSubmit={onSubmit}>
            <label htmlFor="name">Select character name:</label>
            <input required id="name" />
            <button type="submit">Play</button>
          </Form>
        </GameWindow>
      </Main>
    </Container>
  );
};
