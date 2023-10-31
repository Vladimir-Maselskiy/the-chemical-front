'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { LogOutButton } from '../LogOutButton/LogOutButton';
import { useAppSelector } from '@/hooks/redux/hooks';

export const Header = () => {
  const { user } = useAppSelector(state => state);

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100vw"
      minWidth={480}
      minHeight={82}
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
      py={18}
      pr={80}
      backgroundColor="var(--black-background-color)"
    >
      <Box
        display="flex"
        justifyContent="flex-end"
        width="100%"
        maxWidth={1440}
      >
        <Box display="flex" alignItems="center" maxWidth={1440}>
          {user ? <LogOutButton /> : <AuthButtons />}
        </Box>
      </Box>
    </Box>
  );
};
