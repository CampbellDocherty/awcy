import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA',
  authDomain: 'awcy-12b0e.firebaseapp.com',
  projectId: 'awcy-12b0e',
  storageBucket: 'awcy-12b0e.appspot.com',
  messagingSenderId: '892936445118',
  appId: '1:892936445118:web:26f5f360048186f43a92ef',
};

export const app = initializeApp(firebaseConfig);

import {
  getAuth,
  signInWithEmailAndPassword,
  EmailAuthProvider,
} from 'firebase/auth';

export const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};
