import { styled } from 'styled-components';

export const Subtitle = styled.p`
  margin-top: 10px;
  color: rgba(12, 0, 0, 0.7);
  display: block;
`;

export const Title = styled.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;
`;

export const Header = styled.header`
  padding: 1px 20px;
  padding-top: 140px;
`;

export const HeaderImage = styled.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`;
