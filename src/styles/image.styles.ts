import { styled } from 'styled-components';

export const Article = styled.article`
  margin-bottom: 30px;
  min-height: 300px;
  background: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
  position: relative;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #eee;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 50px;
`;

export const Section = styled.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BlogVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Placeholder = styled.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`;

export const Caption = styled.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
`;