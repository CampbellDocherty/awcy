import { useContext, useEffect, useMemo } from 'react';
import raffleTicket from '../../../assets/raffle-ticket.png';
import { GameContext } from '../../../context/Game';
import { defaultValues } from '../../../context/Game/GameContext';
import { addUser } from '../../../firebase/database';
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

const getRaffleNumber = () => {
  const randomNumber = Math.floor(Math.random() * 9999) + 1;
  const formattedNumber = randomNumber.toString().padStart(4, '0');
  return formattedNumber;
};

export const Results = () => {
  const {
    health,
    update,
    raffleNumber: raffleNumberFromContext,
    id,
    email,
    name,
  } = useContext(GameContext);
  const raffleNumber = raffleNumberFromContext || getRaffleNumber();

  useEffect(() => {
    localStorage.setItem('raffleNumber', `${raffleNumber}`);
    update({ raffleNumber });

    const createUser = async () => {
      if (!id) {
        return;
      }

      await addUser(id, { email, name, raffleNumber });
    };

    createUser();
  }, []);

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
            <RaffleNumber>{raffleNumber}</RaffleNumber>
            <RaffleTicket src={raffleTicket} alt="raffle ticket" />
          </RaffleTicketContainer>
        )}
        <Restart onClick={onRestart}>Restart</Restart>
      </ResultContainerInner>
    </ResultContainer>
  );
};
