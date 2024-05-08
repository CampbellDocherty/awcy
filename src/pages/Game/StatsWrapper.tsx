import { useMemo } from 'react';
import hpClout from '../../assets/hp-clout.png';
import hpBackground from '../../assets/white-health-bar.png';
import {
  StatPiece,
  StatsBackground,
  StatsBar,
  StatsContainer,
  StatsInner,
} from './styles/game.styles';

export const StatsWrapper = ({ health }: { health: number }) => {
  const left = useMemo(() => {
    if (health > 0) {
      const offset = 6.5 * (health - 1);
      const left = `${46 - offset}%`;
      return left;
    }
    const offset = 6.5 * Math.abs(health);
    const left = `${53 + offset}%`;
    return left;
  }, [health]);

  return (
    <StatsContainer>
      <StatsInner>
        <StatsBar src={hpClout} alt="stat bar" />
        {/* <StatsBackground src={hpBackground} alt="stat background" /> */}
        <StatPiece $left={left} />
      </StatsInner>
    </StatsContainer>
  );
};
