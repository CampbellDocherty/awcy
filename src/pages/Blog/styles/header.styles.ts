import { styled, keyframes } from 'styled-components';

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

export const Subtitle = styled.img`
  max-width: 14rem;
  margin: 0px 0px 30px 0px;
  animation: ${slideUp} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    max-width: 12rem;
    margin: 0px 0px 20px 0px;
  }
`;

export const Title = styled.img`
  margin: 20px 0;
  max-width: 25rem;
  animation: ${slideUp} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    max-width: 20rem;
  }
`;

export const Header = styled.header`
  padding: 1px 20px;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const grow = keyframes`
0% {
  opacity: 0.85;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -o-transform: scale(0.5);
  transform: scale(0.5);
}
100% {
  opacity: 1;
  -webkit-transform: translate(1);
  -moz-transform: translate(1);
  -o-transform: translate(1);
  transform: translate(1);
}`;

export const HeaderImage = styled.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;
  animation: ${grow} 0.5s ease-in-out;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export const RsvpButton = styled.button`
  font-weight: 700;
  border-radius: 15px;
  width: 150px;
  height: 45px;
  background-color: #61c433;
  border: none;
  outline: none;
  color: black;
  animation: ${slideUp} 0.5s ease-in-out;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;

export const Audio = styled.audio`
  width: 300px;
  max-width: 300px;
  animation: ${slideUp} 0.5s ease-in-out;

  &::-webkit-media-controls-panel {
    background-color: #fefafa;
    color: #fefafa;
  }

  &::-webkit-media-controls-current-time-display {
    display: none;
  }

  &::-webkit-media-controls-time-remaining-display {
    display: none;
  }
`;

export const AudioCaption = styled.p`
  animation: ${slideUp} 0.5s ease-in-out;
  font-weight: 800;
`;
