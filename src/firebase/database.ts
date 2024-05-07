import { getDatabase, ref, set } from 'firebase/database';
import { app } from './app';

export const database = getDatabase(app);

export type UserDetails = {
  name: string;
  email: string;
  raffleNumber: string;
};

export const addUser = async (id: string, details: UserDetails) => {
  await set(ref(database, 'users/' + id), details);
};
