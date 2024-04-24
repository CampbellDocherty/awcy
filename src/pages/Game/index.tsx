import { SyntheticEvent, useState } from 'react';
import {
  Backdrop,
  Form,
  GameWindow,
  LogoColumn,
  Main,
  Container,
  Character,
  Bouncer,
} from './styles/game.styles';
import club from '../../assets/club.jpg';
import home from '../../assets/room.jpg';
import bouncer from '../../assets/bouncer.png';
import character from '../../assets/character.png';

enum Stage {
  LOGIN = 'login',
  CLUB = 'club',
  HOME = 'home',
}

export const Game = () => {
  const [name, setName] = useState<string>('');
  const [stage, setStage] = useState<string>(Stage.LOGIN);
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    setStage('club');
  };
  return (
    <Container>
      <Main>
        <GameWindow>
          {stage === Stage.LOGIN && (
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
          {stage === Stage.CLUB && (
            <>
              <Backdrop src={club} alt="club" />
              <Character $stage={stage} src={character} alt="character" />
              <Bouncer src={bouncer} alt="bouncer" />
              <button onClick={() => setStage('home')}>{'>'}</button>
            </>
          )}
          {stage === Stage.HOME && (
            <>
              <button onClick={() => setStage('club')}>{'<'}</button>
              <Backdrop src={home} alt="home" />
              <Character $stage={stage} src={character} alt="character" />
            </>
          )}
        </GameWindow>
      </Main>
    </Container>
  );
};
