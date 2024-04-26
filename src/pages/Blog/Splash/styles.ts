import { styled } from 'styled-components';

export const SplashContainer = styled.div`
  width: 100vw;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const SplashImage = styled.img<{ $show: boolean }>`
  width: 100%;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;
