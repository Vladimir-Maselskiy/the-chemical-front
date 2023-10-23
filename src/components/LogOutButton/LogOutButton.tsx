import React from 'react';
import { StyledButton } from './LogOutButton.styled';
import { useUserContext } from '@/context/state';

export const LogOutButton = () => {
  const { setUser } = useUserContext();
  const onLogOutButtonClick = () => {
    localStorage.setItem('user', 'null');
    setUser(null);
  };

  return <StyledButton onClick={onLogOutButtonClick}>Log Out</StyledButton>;
};
