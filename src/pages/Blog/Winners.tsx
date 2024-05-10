import { useState } from 'react';
import { UserDetails, getUsers } from '../../firebase/database';

const getRandomWinners = (users: UserDetails[], numberOfWinners: number) => {
  const randomIndices: number[] = [];
  while (randomIndices.length < Math.min(numberOfWinners, users.length)) {
    const randomIndex = Math.floor(Math.random() * users.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }
  const randomUsers = randomIndices.map((index) => users[index]);
  return randomUsers;
};

export const Winners = () => {
  const [amountOfWinners, setAmountOfWinners] = useState(3);
  const [winners, setWinners] = useState<UserDetails[]>([]);

  const chooseWinners = async () => {
    const response = await getUsers();
    if (response.isError || !response.users) {
      console.error('Error fetching users');
      return;
    }

    const users: UserDetails[] = Object.values(response.users);
    const uniqueEmailMap = new Map();
    users.forEach((obj) => {
      uniqueEmailMap.set(obj.raffleNumber, obj);
    });

    const uniqueObjects = Array.from(uniqueEmailMap.values()).filter(
      (obj) =>
        obj.email.toLowerCase() !== 'cam@gmail.com' &&
        obj.email.toLowerCase() !== 'eantwibawua1@hotmail.co.uk'
    );

    const winners = getRandomWinners(uniqueObjects, amountOfWinners);
    setWinners(winners);
  };

  return (
    <div
      style={{
        margin: '30px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <label htmlFor="numberOfWinners">Amount of winners</label>
      <input
        id="numberOfWinners"
        type="number"
        value={amountOfWinners}
        onChange={(e) => setAmountOfWinners(parseInt(e.target.value))}
      />
      <button onClick={chooseWinners}>Choose winners</button>
      {winners.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Raffle number</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((winner) => (
              <tr key={winner.email}>
                <td>{winner.name}</td>
                <td>{winner.email}</td>
                <td>{winner.raffleNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
