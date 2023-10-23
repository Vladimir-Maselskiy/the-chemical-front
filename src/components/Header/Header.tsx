'use client';
import React, { useEffect } from 'react';
import { Box } from '../Box/Box';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { useUserContext } from '@/context/state';
import { LogOutButton } from '../LogOutButton/LogOutButton';

export const Header = () => {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      console.log('data', data);
      const user = JSON.parse(data);
      setUser(user);
    }
  }, []);
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      width={1440}
      minWidth={290}
      position="fixed"
      top={0}
      zIndex={1}
      py={18}
      pr={80}
      backgroundColor="var(--black-background-color)"
    >
      <Box display="flex" alignItems="center">
        {user ? <LogOutButton /> : <AuthButtons />}
      </Box>
    </Box>
  );
};
