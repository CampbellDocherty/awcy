import { SyntheticEvent, useState } from 'react';
import { signIn } from '../../firebase/app';

export const SignIn = () => {
  const [email, setEmail] = useState('eantwibawua1@gmail.com');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <div>
      <h1>Hey Eman 🙂</h1>
      <p>Please sign-in:</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            id="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
