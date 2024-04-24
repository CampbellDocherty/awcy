import { SyntheticEvent, useState } from 'react';
import bouncer from '../../assets/bouncer.png';
import character from '../../assets/character.png';
import club from '../../assets/club.jpg';
import home from '../../assets/room.jpg';
import {
  AspectRatioBox,
  Backdrop,
  Bouncer,
  Character,
  Form,
  GameWindow,
  InnerAspectRatioBox,
  LeftButton,
  LogoColumn,
  RightButton,
  Wrapper,
} from './styles/game.styles';

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
    <Wrapper>
      <AspectRatioBox>
        <InnerAspectRatioBox>
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
                <RightButton onClick={() => setStage('home')}>
                  {'>'}
                </RightButton>
              </>
            )}
            {stage === Stage.HOME && (
              <>
                <LeftButton onClick={() => setStage('club')}>{'<'}</LeftButton>
                <Backdrop src={home} alt="home" />
                <Character $stage={stage} src={character} alt="character" />
              </>
            )}
          </GameWindow>
        </InnerAspectRatioBox>
      </AspectRatioBox>
    </Wrapper>
  );
};
