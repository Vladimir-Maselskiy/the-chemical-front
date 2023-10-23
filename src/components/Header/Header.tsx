'use client';
import React from 'react';
import { Box } from '../Box/Box';
import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
  return (
    <Box
      width="100vw"
      minWidth={290}
      position="fixed"
      zIndex={3}
      backgroundColor="var(--grey-background-color)"
    >
      <Box
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        padding="0 25px 0 20px"
        height={80}
        maxHeight={80}
        backgroundColor="var(--grey-background-color);"
      >
        <></>
      </Box>
      <NavBar />
    </Box>
  );
};
