const MAX_TWO_COLUMN_WIDTH = 990;
const MAX_THREE_COLUMN_WIDTH = 1320;

export const calculateHowManyColumns = () => {
  if (window.innerWidth <= MAX_TWO_COLUMN_WIDTH) {
    return 2;
  }
  if (
    window.innerWidth <= MAX_THREE_COLUMN_WIDTH &&
    window.innerWidth > MAX_TWO_COLUMN_WIDTH
  ) {
    return 3;
  }
  return 4;
};
