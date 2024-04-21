import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('When a user clicks the title 10 times', () => {
  test('it shows the sign in form', async () => {
    render(<App />);
    const title = screen.getByText('arewecoolyet.blog');
    [...Array(10).keys()].forEach(() => fireEvent.click(title));
    await screen.findByText('Please sign-in:');
  });
});
