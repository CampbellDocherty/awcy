import { keyframes, styled } from 'styled-components';

const slideDown = keyframes`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    -moz-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`;

const image =
  'data:image/png;base64,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';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40%;
  margin: 30px auto;

  @media screen and (max-device-width: 568px) {
    width: 95%;
  }
`;

export const RotatedWrapper = styled.div`
  width: 65%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    transform: rotate(90deg) scale(2.3);
  }
`;

export const AspectRatioBox = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`;

export const InnerAspectRatioBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const GameWindow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
`;

export const Backdrop = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const LogoColumn = styled.div`
  width: 30%;
  background: #005f9f;
  background-image: url(${image});
  color: #96e3ff;
  outline: 3px solid #04214d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1px;
`;

export const Form = styled.form`
  width: 70%;
  padding: 10px;

  background: white;
  background-image: url(${image});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  & > label {
    margin-bottom: 5px;
    width: 70%;
    align-self: center;
    text-align: left;

    @media screen and (max-device-width: 568px) {
      font-size: 12px;
    }
  }

  & > input,
  input:focus {
    margin-bottom: 15px;
    width: 100%;
    border-radius: 0;
    height: 25px;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    width: 70%;
    align-self: center;

    @media screen and (max-device-width: 568px) {
      font-size: 10px;
      height: 18px;
    }
  }

  & > button {
    border: 2px solid #93bae3;
    padding: 4px;
    background: #005f9f;
    background-image: url(${image});
    color: #c4fffe;
    width: 80px;
    height: 30px;
    align-self: center;
    -webkit-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    -moz-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);

    @media screen and (max-device-width: 568px) {
      font-size: 10px;
      height: 20px;
      width: 60px;
      padding: 2px;
    }
  }
`;

export const GraphicWrapper = styled.div`
  max-height: 60%;
  object-fit: contain;
  align-self: center;
  @media screen and (max-device-width: 568px) {
    max-height: 50%;
  }
`;

export const LoginGraphic = styled.img`
  height: 100%;
`;

export const BouncerOverlay = styled.div`
  width: 12%;
  height: 27%;
  position: absolute;
  left: 43.5%;
  top: 58%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const bounce = keyframes`
0% {
    top: 50%;
}

50% {
  top: 51%
}

100% {
    top: 50%;
}`;

export const RightButton = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  transform: scaleX(-1);
  animation: ${bounce} 1.5s infinite;
`;

export const LeftButton = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transform: scaleX(1);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  animation: ${bounce} 1.5s infinite;
`;

export const Character = styled.img`
  position: absolute;
  bottom: 0;
  right: 3%;
`;

export const StatsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  top: 2%;
  left: 0;
  right: 0;
  max-width: 30%;
  height: 14%;
  animation: ${slideDown} 0.5s ease-in-out;
  position: absolute;
`;

export const StatsInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const StatsBar = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const StatsBackground = styled.img`
  width: 107%;
  position: absolute;
  top: -5%;
  left: -3%;
  z-index: 1;
`;

export const StatPiece = styled.div<{ $left: string }>`
  left: ${(props) => props.$left};
  bottom: 32%;
  background-color: #57df00;
  width: 6%;
  height: 49%;
  position: absolute;
  z-index: 1;
`;

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

export const MissionBanner = styled.div`
  background: black;
  position: absolute;
  bottom: 3%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: white;
  width: 50%;
  border-radius: 3%;
  word-wrap: break-word;
  animation: ${slideUp} 0.5s ease-in-out;
`;

export const MissionText = styled.p`
  font-size: 20px;
  margin: 12px;

  @media screen and (max-device-width: 600px) {
    font-size: 12px;
    margin: 4px;
  }
`;

export const PopUpContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightArrowImg = styled.img`
  position: absolute;
  right: 10%;
  top: 43%;
  opacity: 0.9;
  transform: translateY(-50%);
  cursor: pointer;
  width: 8%;
`;

export const PopUpImg = styled.img`
  position: relative;
  height: 100%;
`;

export const FirstDecisionOptionOverlay = styled.div`
  position: absolute;
  width: 17.4%;
  cursor: pointer;
  top: 60.7%;
  left: 29.2%;
  z-index: 500;
  height: 13%;
`;

export const SecondDecisionOptionOverlay = styled.div`
  position: absolute;
  width: 17.4%;
  cursor: pointer;
  top: 60.7%;
  right: 29.7%;
  z-index: 500;
  height: 13%;
`;

export const ThirdDecisionOptionOverlay = styled.div`
  position: absolute;
  width: 17.4%;
  cursor: pointer;
  bottom: 8.7%;
  left: 29.1%;
  z-index: 500;
  height: 13%;
`;

export const OptionBlocker = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  background-color: white;
  bottom: 0;
`;

export const DjOverlay = styled.div`
  position: absolute;
  width: 18%;
  height: 20%;
  top: 42%;
  right: 36%;
  z-index: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 800;
  background-color: rgb(0, 0, 0, 0.9);
  padding: 4px;
  word-wrap: wrap;
`;

export const ResultContainerInner = styled.div`
  width: 60%;
`;

export const ResultTitle = styled.h2<{ $win: boolean }>`
  font-family: Nokia;
  font-size: 40px;
  margin: 0;
  margin-bottom: 8px;
  color: ${(props) => (props.$win ? 'yellow' : 'red')};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  @media screen and (max-device-width: 900px) {
    font-size: 18px;
  }
`;

export const ResultSubtitle = styled.h4`
  font-family: Nokia;
  font-size: 20px;
  color: white;
  margin: 0;
  @media screen and (max-device-width: 900px) {
    font-size: 12px;
  }
`;

export const RaffleTicketContainer = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RaffleNumber = styled.p`
  font-family: Nokia;
  position: absolute;
  font-size: 18px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-device-width: 568px) {
    font-size: 8px;
  }
`;

export const RaffleTicket = styled.img`
  width: 100%;
`;

export const Restart = styled.button`
  font-family: Nokia;
  font-size: 16px;
  color: white;
  margin: 0;
  background: transparent;
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  margin-top: 8px;
  cursor: pointer;

  @media screen and (max-device-width: 568px) {
    font-size: 8px;
  }
`;

export const EmanOverlay = styled.div`
  position: absolute;
  width: 12%;
  height: 20%;
  top: 63%;
  right: 35%;
  z-index: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
