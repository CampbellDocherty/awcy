import { keyframes, styled } from 'styled-components';

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

export const Article = styled.article`
  margin-bottom: 30px;
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
  padding-bottom: 30px;
  animation: ${slideUp} 0.75s ease-in;
  position: relative;

  @media (max-width: 660px) {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`;

export const Delete = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Pin = styled.button`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Edit = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const EditInput = styled.input`
  position: absolute;
  bottom: 0;
  left: 50%;
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
  cursor: pointer;
`;

export const BlogVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
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
  margin-bottom: 0px;
  @media (max-width: 660px) {
    padding-left: 10px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 7%, 0.92);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 0px 20px;

  & > img,
  & > video {
    position: absolute;
    object-fit: scale-down;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 85%;
    max-width: 85%;
  }
`;
