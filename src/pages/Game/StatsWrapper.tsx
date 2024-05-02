import { Stats as StatsType } from '../../context/Game/types';
import { StatBar, Stats, StatsBar } from './styles/game.styles';
import hpClout from '../../assets/hp-clout.png';

export const StatsWrapper = ({ stats }: { stats: StatsType }) => {
  return <StatsBar src={hpClout} alt="stat bar" />;
};
