import React from 'react';
import { StyledLink, StyledWrapper } from './AuthButtons.styled';

export const AuthButtons = () => {
  return (
    <StyledWrapper>
      <StyledLink href="/products">Log In</StyledLink>
      <StyledLink href="/why-atmor">Sign Up</StyledLink>
    </StyledWrapper>
  );
};
