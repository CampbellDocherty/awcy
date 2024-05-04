import { keyframes, styled } from 'styled-components';

const slideUp = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -moz-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`;

export const Phone = styled.img`
  max-width: 20%;
  position: absolute;
  bottom: -15%;
  left: 6%;
  animation: ${slideUp} 0.5s ease-in-out;
  cursor: pointer;
  z-index: 190;
`;

export const Message = styled.img`
  width: 100%;
  position: absolute;
  top: -15%;
  left: 0;
  cursor: pointer;
  z-index: 500;
`;

export const Cupboard = styled.img`
  width: 19%;
  cursor: pointer;
  position: absolute;
  left: 8.2%;
  top: 32%;

  &:hover {
    outline: 3px solid lightblue;
  }
`;
