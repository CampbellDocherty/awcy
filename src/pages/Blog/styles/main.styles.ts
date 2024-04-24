import { styled } from 'styled-components';
import {
  MAX_THREE_COLUMN_WIDTH,
  MAX_TWO_COLUMN_WIDTH,
} from '../columnCalculator/calculateHowManyColumns';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 10px;
    margin-top: 10px;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  color: #444;
  margin: 0px 30px 30px 30px;

  @media (max-width: 660px) {
    margin: 0px 10px 10px 10px;
  }

  @media (max-width: ${MAX_TWO_COLUMN_WIDTH}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media (max-width: ${MAX_THREE_COLUMN_WIDTH}) and (min-width: ${MAX_TWO_COLUMN_WIDTH}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > article {
    margin-bottom: 30px;
    width: 100%;
  }
`;

export const Plus = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
