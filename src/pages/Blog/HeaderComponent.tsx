import awcyAudio from '../../assets/awcy.mp3';
import tee from '../../assets/tee.png';
import {
  Audio,
  AudioCaption,
  Header,
  HeaderImage,
  RsvpButton,
  Subtitle,
  Title,
} from './styles/header.styles';

export const HeaderComponent = ({
  onTitleClick,
}: {
  onTitleClick: () => void;
}) => {
  return (
    <Header>
      <HeaderImage>
        <img src={tee} alt="are we cool yet t-shirt" />
      </HeaderImage>
      <Title onClick={onTitleClick}>arewecoolyet.blog</Title>
      <Subtitle>{"YOU'RE ALL WELCOME"}</Subtitle>
      <a
        href="https://forms.gle/8dzX8f76mTJm69iw7"
        target="_blank"
        rel="noreferrer"
      >
        <RsvpButton>PLEASE RSVP! CLICK HERE</RsvpButton>
      </a>
      <Audio controlsList="nodownload noplaybackrate" controls src={awcyAudio}>
        <track default kind="captions" src={awcyAudio} />
      </Audio>
      <AudioCaption>stu$h Auntie - Pattern [Up]</AudioCaption>
    </Header>
  );
};
