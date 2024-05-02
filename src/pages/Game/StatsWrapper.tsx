import hpClout from '../../assets/hp-clout.png';
import { Stats as StatsType } from '../../context/Game/types';
import { StatsBar } from './styles/game.styles';

export const StatsWrapper = ({ stats }: { stats: StatsType }) => {
  return <StatsBar src={hpClout} alt="stat bar" />;
};
