import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA',
  authDomain: 'awcy-12b0e.firebaseapp.com',
  projectId: 'awcy-12b0e',
  databaseURL:
    'https://awcy-12b0e-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'awcy-12b0e.appspot.com',
  messagingSenderId: '892936445118',
  appId: '1:892936445118:web:26f5f360048186f43a92ef',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch {
    return {
      error: true,
      type: 'Something went wrong',
    };
  }
};
