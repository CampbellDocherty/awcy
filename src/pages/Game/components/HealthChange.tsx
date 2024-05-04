import { styled, keyframes } from 'styled-components';

const moveHealth = () => keyframes`
0% {
    opacity: 1;
    top: 50%;
    left: 46%;
}

80% {
    opacity: 1;
}

100% {
    top: 3%;
    left: 46%;
    opacity: 0;
}`;

const HealthChangeText = styled.p<{ $color: string }>`
  font-family: Nokia;
  font-size: 28px;
  position: absolute;
  opacity: 0;
  color: ${(props) => props.$color};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  animation: ${moveHealth} 1.5s ease;

  @media screen and (max-device-width: 568px) {
    font-size: 18px;
  }
`;

export const HealthChange = ({ healthChange }: { healthChange: number }) => {
  const color = healthChange > 0 ? '#57df00' : 'red';
  const prefix = healthChange > 0 ? '+' : '';
  return (
    <HealthChangeText $color={color}>{`${
      prefix + healthChange
    }hp`}</HealthChangeText>
  );
};
