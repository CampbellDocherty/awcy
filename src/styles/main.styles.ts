import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 0;
    margin-top: 10px;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  color: #444;

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 660px) and (min-width: 569px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 990px) and (min-width: 661px) {
    grid-template-columns: 1fr 1fr 1fr;
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
