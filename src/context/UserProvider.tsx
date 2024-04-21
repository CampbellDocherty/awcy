import { ReactNode, useEffect, useState } from 'react';

import { UserContext } from './UserContext';
import { auth } from '../firebase/app';
// eslint-disable-next-line import/named
import { onAuthStateChanged, User } from '@firebase/auth';

export const UserProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
