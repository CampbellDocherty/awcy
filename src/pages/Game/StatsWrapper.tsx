import { Stats as StatsType } from '../../context/Game/types';
import { StatBar, Stats } from './styles/game.styles';

export const StatsWrapper = ({ stats }: { stats: StatsType }) => {
  return (
    <Stats>
      <StatBar $stat="health" max="100" value={stats.health}>
        Health: {stats.health}
      </StatBar>
      <StatBar $stat="clout" max="100" value={stats.clout}>
        Clout: {stats.clout}
      </StatBar>
    </Stats>
  );
};
