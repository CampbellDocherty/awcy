import { createContext } from 'react';
// eslint-disable-next-line import/named
import { User } from 'firebase/auth';

export const UserContext = createContext<User | null>(null);
