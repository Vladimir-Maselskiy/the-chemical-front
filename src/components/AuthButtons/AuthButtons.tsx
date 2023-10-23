import React from 'react';
import { StyledLink, StyledWrapper } from './AuthButtons.styled';

export const AuthButtons = () => {
  return (
    <StyledWrapper>
      <StyledLink href="/auth/login">Log In</StyledLink>
      <StyledLink href="/auth/register">Sign Up</StyledLink>
    </StyledWrapper>
  );
};
