import pointer from '../../../assets/pixel-click.png';
import { keyframes, styled } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const PointerStyle = styled.img`
  width: 40%;
  animation: ${pulse} 2s infinite;
`;

export const Pointer = () => {
  return <PointerStyle src={pointer} alt="pointer" />;
};
