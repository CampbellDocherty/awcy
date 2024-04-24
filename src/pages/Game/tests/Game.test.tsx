import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Game } from '../Game';

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

  test('goes home when right arrow clicked', () => {
    render(<Game />);
    const input = screen.getByLabelText('Select character name:');
    fireEvent.change(input, { target: { value: 'Cammy' } });
    fireEvent.click(screen.getByText('Play'));
    fireEvent.click(screen.getByText('>'));

    screen.getByAltText('home');
    screen.getByAltText('character');
    expect(screen.queryByAltText('bouncer')).toBeNull();
  });
});
