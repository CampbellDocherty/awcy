import { useMemo } from 'react';
import hpClout from '../../assets/hp-clout.png';
import {
  StatPiece,
  StatsBar,
  StatsContainer,
  StatsInner,
} from './styles/game.styles';

export const StatsWrapper = ({ health }: { health: number }) => {
  const [healthPieces, cloutPieces] = useMemo(() => {
    if (health > 0) {
      const healthPieces = [...Array(health)].map(() => 0);
      return [healthPieces, []];
    }

    if (health < 0) {
      const cloutPieces = [...Array(0 - health)].map(() => 0);
      return [[], cloutPieces];
    }

    return [[], []];
  }, [health]);

  return (
    <StatsContainer>
      <StatsInner>
        <StatsBar src={hpClout} alt="stat bar" />
        {healthPieces.map((_, index) => {
          const offset = 6.5 * index;
          const left = `${46 - offset}%`;
          console.log(left);
          return <StatPiece key={index} $left={left} />;
        })}
        {cloutPieces.map((_, index) => {
          const offset = 6.5 * index;
          const left = `${53 + offset}%`;
          return <StatPiece key={index} $left={left} />;
        })}
      </StatsInner>
    </StatsContainer>
  );
};
