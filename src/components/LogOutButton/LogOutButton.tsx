import React from 'react';
import { StyledButton } from './LogOutButton.styled';
import { useUserContext } from '@/context/state';
import { useAppDispatch, useAppSelector } from '@/hooks/redux/hooks';
import { setUser } from '@/redux/reducers';

export const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const onLogOutButtonClick = () => {
    localStorage.setItem('user', 'null');
    dispatch(setUser(null));
  };

  return <StyledButton onClick={onLogOutButtonClick}>Log Out</StyledButton>;
};
