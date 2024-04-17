import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('When the app renders', () => {
  test('it shows the title', () => {
    render(<App />);
    screen.getByText('arewecoolyet.blog');
    screen.getByText("YOU'RE ALL WELCOME");
  });

  test('shows content', async () => {
    render(<App />);
    await screen.findByAltText('one');
    screen.getByAltText('two');
    screen.getByAltText('three');
    screen.getByAltText('four');
  });
});
