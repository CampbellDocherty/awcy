import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Game } from '..';

describe('When the game renders', () => {
  test('it shows the title', () => {
    render(<Game />);
    screen.getByText('Game');
  });

  test('it shows the first login screen', () => {
    render(<Game />);
    screen.getByText('Select character name:');
    screen.getByText('Play');
  });
});
