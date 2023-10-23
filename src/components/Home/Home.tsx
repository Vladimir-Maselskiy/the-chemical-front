'use client';
import React from 'react';
import {
  HeroStyledWrapper,
  StyledButton,
  StyledDescription,
  StyledHome,
  StyledTitle,
} from './Home.styled';
import { OpenDeals } from '../OpenDeals/OpenDeals';

export const Home = () => {
  return (
    <>
      <StyledHome>
        <HeroStyledWrapper>
          <StyledTitle>The chemical negatively charged</StyledTitle>
          <StyledDescription>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is{' '}
          </StyledDescription>
          <StyledButton>Get Started</StyledButton>
        </HeroStyledWrapper>
      </StyledHome>
      <OpenDeals />
    </>
  );
};
