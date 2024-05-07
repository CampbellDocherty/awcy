import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vitest } from 'vitest';
import { GameProvider } from '../../../context/Game/GameProvider';
import { Game } from '../Backdrops/Game';

const renderGame = () => {
  render(
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

function enterNameAndPlay() {
  const nameInput = screen.getByLabelText('Name:');
  fireEvent.change(nameInput, { target: { value: 'Cammy' } });
  const emailInput = screen.getByLabelText('Email:');
  fireEvent.change(emailInput, { target: { value: 'cam@gmail.com' } });
  fireEvent.click(screen.getByText('Play'));
}

function mocks() {
  vitest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(async () => {
      return;
    });
  vitest.useFakeTimers();
}

function clearMocks() {
  vitest.clearAllMocks();
  vitest.useRealTimers();
}

describe('When the game renders', () => {
  test('it shows the title', () => {
    renderGame();
    screen.getByText('AWCY');
    screen.getByText('version 1.0');
  });

  test('it shows the first login screen', () => {
    renderGame();
    screen.getByText('Name:');
    screen.getByText('Play');
  });

  test('goes to home when submit name', () => {
    renderGame();
    enterNameAndPlay();
    screen.getByAltText('home');
    screen.getByAltText('character');
  });
});

describe('home mission', () => {
  beforeEach(async () => {
    renderGame();
    enterNameAndPlay();
    mocks();
    vitest.advanceTimersByTime(3000);

    const phone = await screen.findByAltText('message received');
    fireEvent.click(phone);
    const message = screen.getByAltText(
      "Yo what are you up to! Come whisky it's live"
    );
    fireEvent.click(message);
  });

  afterEach(() => {
    clearMocks();
  });

  test('when outfit selected, outfits disappear and then health and clout appear', async () => {
    expect(screen.queryByAltText('drippy outfit')).toBeNull();
    const cupboard = screen.getByTestId('cupboard');
    fireEvent.click(cupboard);
    const outfitOne = screen.getByAltText('drippy outfit');
    fireEvent.click(outfitOne);

    expect(screen.queryByAltText('steady outfit')).toBeNull();

    screen.getByAltText('stat bar');
  });

  test('shows outfits when cupboard clicked', async () => {
    expect(screen.queryByAltText('drippy outfit')).toBeNull();
    const cupboard = screen.getByTestId('cupboard');
    fireEvent.click(cupboard);
    screen.getByAltText('drippy outfit');
    screen.getByAltText('steady outfit');
  });

  test('shows mission', () => {
    screen.getByText('Get changed and head to the club');
  });
});
