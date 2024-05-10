import { child, get, getDatabase, ref, set } from 'firebase/database';
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

export const getUsers = async () => {
  const response = {
    users: null,
    isError: false,
  };
  const dbRef = ref(database);
  await get(child(dbRef, 'users/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        response.users = snapshot.val();
      } else {
        response.users = null;
      }
    })
    .catch(() => {
      response.isError = true;
    });

  return response;
};
