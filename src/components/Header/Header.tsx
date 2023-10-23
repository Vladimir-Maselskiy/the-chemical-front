'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { AuthButtons } from '../AuthButtons/AuthButtons';

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      width="100vw"
      minWidth={290}
      position="fixed"
      zIndex={1}
      py={18}
      pr={80}
      backgroundColor="var(--black-background-color)"
    >
      <Box display="flex" alignItems="center">
        <AuthButtons />
      </Box>
    </Box>
  );
};
