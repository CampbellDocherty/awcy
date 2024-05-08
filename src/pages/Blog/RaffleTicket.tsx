import { styled } from 'styled-components';
import raffle from '../../assets/raffle-ticket.png';

const Fixed = styled.div`
  position: fixed;
  width: 10%;
  top: 5px;
  left: 5px;
  z-index: 600;

  @media screen and (max-device-width: 568px) {
    width: 30%;
  }
`;

export const TicketContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.p<{ $expanded?: boolean }>`
  font-family: Nokia;
  position: absolute;
  font-size: ${({ $expanded }) => ($expanded ? '30px' : '20px')};
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-device-width: 950px) {
    font-size: ${({ $expanded }) => ($expanded ? '30px' : '12px')};
  }
`;

export const Ticket = styled.img`
  width: 100%;
`;

export const RaffleTicket = ({ raffleNumber }: { raffleNumber: string }) => {
  return (
    <Fixed>
      <TicketContainer>
        <Number>{raffleNumber}</Number>
        <Ticket src={raffle} alt="raffle ticket" />
      </TicketContainer>
    </Fixed>
  );
};
