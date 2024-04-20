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
  max-width: 502px;
  flex: auto;
  display: flex;
  flex-direction: column;
  color: #444;

  & > article {
    margin-bottom: 30px;
  }
`;

export const Plus = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
