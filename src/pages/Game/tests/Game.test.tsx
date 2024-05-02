import { beforeAll, describe, expect, test, vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../Backdrops/Game';
import { GameProvider } from '../../../context/Game/GameProvider';

const renderGame = () => {
  render(
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

function enterNameAndPlay() {
  const input = screen.getByLabelText('Select character name:');
  fireEvent.change(input, { target: { value: 'Cammy' } });
  fireEvent.click(screen.getByText('Play'));
}

describe('When the game renders', () => {
  test('it shows the title', () => {
    renderGame();
    screen.getByText('AWCY');
    screen.getByText('version 1.0');
  });

  test('it shows the first login screen', () => {
    renderGame();
    screen.getByText('Select character name:');
    screen.getByText('Play');
  });

  test('goes to home when submit name', () => {
    renderGame();
    enterNameAndPlay();
    screen.getByAltText('home');
    screen.getByAltText('character');
  });

  test('goes home when arrow clicked', async () => {
    renderGame();
    enterNameAndPlay();
    vitest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => {});

    screen.getByAltText('home');
    screen.getByAltText('character');
    vitest.useFakeTimers({ shouldAdvanceTime: true });

    await screen.findByAltText('message received');
    vitest.useRealTimers();
    vitest.clearAllMocks();
  });

  test('shows outfits when home clicked', () => {
    renderGame();
    enterNameAndPlay();

    expect(screen.queryByAltText('outfit-1')).toBeNull();
    const home = screen.getByAltText('home');
    fireEvent.click(home);
    screen.getByAltText('outfit-1');
    screen.getByAltText('outfit-2');
    screen.getByAltText('outfit-3');
  });

  test('when outfit selected, outfits disappear and then health and clout appear', () => {
    renderGame();
    enterNameAndPlay();

    expect(screen.queryByAltText('outfit-1')).toBeNull();
    const home = screen.getByAltText('home');
    fireEvent.click(home);

    const outfitOne = screen.getByAltText('outfit-1');
    fireEvent.click(outfitOne);

    expect(screen.queryByAltText('outfit-2')).toBeNull();
    expect(screen.queryByAltText('outfit-3')).toBeNull();

    screen.getByText('Health: 80');
    screen.getByText('Clout: 80');
  });
});
