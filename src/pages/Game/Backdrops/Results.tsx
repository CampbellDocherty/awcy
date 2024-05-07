import { useContext, useMemo } from 'react';
import { GameContext } from '../../../context/Game';
import { defaultValues } from '../../../context/Game/GameContext';
import { StatsWrapper } from '../StatsWrapper';
import {
  Restart,
  ResultContainer,
  ResultContainerInner,
  ResultSubtitle,
  ResultTitle,
} from '../styles/game.styles';

export const Results = () => {
  const { health, update } = useContext(GameContext);
  const { title, subtitle } = useMemo(() => {
    if (health > 0) {
      return {
        title: 'Congrats',
        subtitle: 'You made some good decisions',
      };
    }
    return {
      title: 'Game over',
      subtitle:
        "Ouch! The DJ's think you're doing too much, your night ends here",
    };
  }, [health]);

  const onRestart = () => {
    update(defaultValues);
  };

  return (
    <ResultContainer>
      <ResultContainerInner>
        <StatsWrapper health={health} />
        <ResultTitle $win={health > 0}>{title}</ResultTitle>
        <ResultSubtitle>{subtitle}</ResultSubtitle>
        <Restart onClick={onRestart}>Restart</Restart>
      </ResultContainerInner>
    </ResultContainer>
  );
};
