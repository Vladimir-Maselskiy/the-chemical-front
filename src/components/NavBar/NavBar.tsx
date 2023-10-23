import React from 'react';
import { StyledNavBar, StyledLink } from './NavBar.styled';
import Home from '@/app/page';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledLink href="/">
        <Home />
      </StyledLink>
      <StyledLink href="/products">ПРОДУКТИ</StyledLink>
      <StyledLink href="/why-atmor">ЧОМУ ATMOR</StyledLink>
      <StyledLink href="/description">ЗАСТОСУНОК</StyledLink>
      <StyledLink href="/instruction">ІНСТРУКЦІЇ</StyledLink>
      <StyledLink href="/service">СЕРВІС</StyledLink>
      <StyledLink href="/contacts">КОНТАКТИ</StyledLink>
    </StyledNavBar>
  );
};
