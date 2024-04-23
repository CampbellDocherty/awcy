import { SyntheticEvent, useState } from 'react';
import {
  Backdrop,
  Form,
  GameWindow,
  LogoColumn,
  Main,
  Container,
} from '../../styles/game.styles';
import club from '../../assets/club.jpg';
import bouncer from '../../assets/bouncer.png';
import character from '../../assets/character.png';

export const Game = () => {
  const [name, setName] = useState<string>('');
  const [stage, setStage] = useState<string>('login');
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    setStage('club');
  };
  return (
    <Container>
      <Main>
        <GameWindow>
          {stage === 'login' && (
            <>
              <LogoColumn>
                <p>AWCY</p>
                <p>version 1.0</p>
              </LogoColumn>
              <Form onSubmit={onSubmit}>
                <label htmlFor="name">Select character name:</label>
                <input
                  required
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <button type="submit">Play</button>
              </Form>
            </>
          )}
          {stage === 'club' && (
            <>
              <Backdrop src={club} alt="club" />
              <img src={character} alt="character" />
              <img src={bouncer} alt="bouncer" />
            </>
          )}
        </GameWindow>
      </Main>
    </Container>
  );
};
