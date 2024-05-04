import { keyframes, styled } from 'styled-components';

export const OutfitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const grow = keyframes`
0% {
  opacity: 0.85;
  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -o-transform: scale(0.2);
  transform: scale(0.2);
}
100% {
  opacity: 1;
  -webkit-transform: translate(1);
  -moz-transform: translate(1);
  -o-transform: translate(1);
  transform: translate(1);
}`;

export const Outfit = styled.img`
  width: 30%;
  cursor: pointer;

  &:nth-of-type(1) {
    animation: ${grow} 1s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: ${grow} 1.5s ease-in-out;
  }

  &:nth-of-type(3) {
    animation: ${grow} 2s ease-in-out;
  }
`;

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
  z-index: 200;
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
