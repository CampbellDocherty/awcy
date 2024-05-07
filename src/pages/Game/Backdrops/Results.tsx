import { useContext, useMemo } from 'react';
import { GameContext } from '../../../context/Game';
import { defaultValues } from '../../../context/Game/GameContext';
import { StatsWrapper } from '../StatsWrapper';
import {
  RaffleNumber,
  RaffleTicket,
  RaffleTicketContainer,
  Restart,
  ResultContainer,
  ResultContainerInner,
  ResultSubtitle,
  ResultTitle,
} from '../styles/game.styles';
import raffleTicket from '../../../assets/raffle-ticket.png';

export const Results = () => {
  const { health, update } = useContext(GameContext);

  const userWon = health > 0;

  const { title, subtitle } = useMemo(() => {
    if (userWon) {
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
        <ResultTitle $win={userWon}>{title}</ResultTitle>
        <ResultSubtitle>{subtitle}</ResultSubtitle>
        {userWon && (
          <RaffleTicketContainer>
            <RaffleNumber>0078</RaffleNumber>
            <RaffleTicket src={raffleTicket} alt="raffle ticket" />
          </RaffleTicketContainer>
        )}
        <Restart onClick={onRestart}>Restart</Restart>
      </ResultContainerInner>
    </ResultContainer>
  );
};
