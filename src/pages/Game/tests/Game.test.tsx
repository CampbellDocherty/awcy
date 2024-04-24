import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../Game';
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

function clickToGoHome() {
  fireEvent.click(screen.getByText('>'));
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

  test('goes to club when submit name', () => {
    renderGame();
    enterNameAndPlay();
    screen.getByAltText('club');
    screen.getByAltText('character');
    screen.getByAltText('bouncer');
  });

  test('goes home when right arrow clicked', () => {
    renderGame();
    enterNameAndPlay();
    clickToGoHome();

    screen.getByAltText('home');
    screen.getByAltText('character');
    expect(screen.queryByAltText('bouncer')).toBeNull();
  });

  test.only('shows outfits when home clicked', () => {
    renderGame();
    enterNameAndPlay();
    clickToGoHome();

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
    clickToGoHome();

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
