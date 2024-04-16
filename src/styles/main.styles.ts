import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
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
