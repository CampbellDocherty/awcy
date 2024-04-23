import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '..';

describe('When the game renders', () => {
  test('it shows the title', () => {
    render(<Game />);
    screen.getByText('AWCY');
    screen.getByText('version 1.0');
  });

  test('it shows the first login screen', () => {
    render(<Game />);
    screen.getByText('Select character name:');
    screen.getByText('Play');
  });

  test('goes to club when submit name', () => {
    render(<Game />);
    const input = screen.getByLabelText('Select character name:');
    fireEvent.change(input, { target: { value: 'Cammy' } });
    fireEvent.click(screen.getByText('Play'));
    screen.getByAltText('club');
    screen.getByAltText('character');
    screen.getByAltText('bouncer');
  });
});
