'use client';
import { createContext, useContext, useState } from 'react';

type Props = {
  children?: JSX.Element;
};

interface IUserContext {
  user: { email: string } | null;
  setUser: React.Dispatch<React.SetStateAction<{ email: string } | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

export function UserWrapper({ children }: Props) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  let sharedState = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={sharedState}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      'useUserContext has to be used within <useUserContext.Provider>'
    );
  }
  return context;
}
