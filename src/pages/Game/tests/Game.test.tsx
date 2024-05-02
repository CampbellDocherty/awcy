import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vitest,
} from 'vitest';
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

  test('phone appears', async () => {
    renderGame();
    enterNameAndPlay();

    screen.getByAltText('home');
    screen.getByAltText('character');
    vitest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(async () => {
        return;
      });

    vitest.useFakeTimers({ shouldAdvanceTime: true });
    await screen.findByAltText('message received');
    vitest.useRealTimers();
    vitest.clearAllMocks();
  });

  test('shows outfits when home clicked', async () => {
    renderGame();
    enterNameAndPlay();
    vitest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(async () => {
        return;
      });
    vitest.useFakeTimers({ shouldAdvanceTime: true });

    const phone = await screen.findByAltText('message received');
    fireEvent.click(phone);
    const message = screen.getByAltText(
      "Yo what are you up to! Come whisky it's live"
    );
    fireEvent.click(message);

    expect(screen.queryByAltText('outfit-1')).toBeNull();
    const cupboard = screen.getByAltText('cupboard');
    fireEvent.click(cupboard);
    screen.getByAltText('outfit-1');
    screen.getByAltText('outfit-2');
    screen.getByAltText('outfit-3');

    vitest.useRealTimers();
    vitest.clearAllMocks();
  });

  test('when outfit selected, outfits disappear and then health and clout appear', async () => {
    renderGame();
    enterNameAndPlay();
    vitest
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(async () => {
        return;
      });
    vitest.useFakeTimers({ shouldAdvanceTime: true });

    const phone = await screen.findByAltText('message received');
    fireEvent.click(phone);
    const message = screen.getByAltText(
      "Yo what are you up to! Come whisky it's live"
    );
    fireEvent.click(message);

    expect(screen.queryByAltText('outfit-1')).toBeNull();
    const cupboard = screen.getByAltText('cupboard');
    fireEvent.click(cupboard);
    const outfitOne = screen.getByAltText('outfit-1');
    fireEvent.click(outfitOne);

    expect(screen.queryByAltText('outfit-2')).toBeNull();
    expect(screen.queryByAltText('outfit-3')).toBeNull();

    screen.getByText('Health: 80');
    screen.getByText('Clout: 80');
    vitest.useRealTimers();
    vitest.clearAllMocks();
  });
});
