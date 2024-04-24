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
  Outfit,
  OutfitContainer,
  RightButton,
  StatBar,
  Stats,
  Wrapper,
} from './styles/game.styles';

enum Stage {
  LOGIN = 'login',
  CLUB = 'club',
  HOME = 'home',
}

type Stats = {
  health: number;
  clout: number;
};

export const Game = () => {
  const [name, setName] = useState<string>('');
  const [stage, setStage] = useState<string>(Stage.LOGIN);
  const [showOutfits, setShowOutfits] = useState<boolean>(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    setStage('club');
  };

  const onHomeClick = () => {
    setStats(null);
    setShowOutfits(true);
  };

  const onOutfitSelect = () => {
    setShowOutfits(false);
    setStats({
      health: 80,
      clout: 80,
    });
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
                <Backdrop src={home} alt="home" onClick={onHomeClick} />
                <Character $stage={stage} src={character} alt="character" />
                {showOutfits && (
                  <OutfitContainer>
                    <Outfit onClick={onOutfitSelect} src="" alt="outfit-1" />
                    <Outfit onClick={onOutfitSelect} src="" alt="outfit-2" />
                    <Outfit onClick={onOutfitSelect} src="" alt="outfit-3" />
                  </OutfitContainer>
                )}
              </>
            )}
            {stats && stage !== Stage.LOGIN && (
              <Stats>
                <StatBar $stat="health" max="100" value={stats.health}>
                  Health: {stats.health}
                </StatBar>
                <StatBar $stat="clout" max="100" value={stats.clout}>
                  Clout: {stats.clout}
                </StatBar>
              </Stats>
            )}
          </GameWindow>
        </InnerAspectRatioBox>
      </AspectRatioBox>
    </Wrapper>
  );
};
