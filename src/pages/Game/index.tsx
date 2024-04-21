import { SyntheticEvent } from 'react';

export const Game = () => {
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <p>Game</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Select character name:</label>
        <input required id="name" />
        <button type="submit">Play</button>
      </form>
    </>
  );
};
