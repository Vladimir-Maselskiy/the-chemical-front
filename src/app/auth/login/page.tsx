'use client';
import { Box } from '@/components/Box/Box';
import {
  StyledForm,
  StyledInput,
  StyledInputSpan,
  StyledInputWrapper,
  StyledLabel,
  StyledSubmitButton,
  StyledTitle,
} from '@/components/UserForm/UserForm.styled';
import { TUser } from '@/interfaces/interfaces';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

export default function LoginPage() {
  const ref = useRef<HTMLButtonElement>(null);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    let user: TUser = {
      email: '',
      password: '',
    };

    const data = new FormData(e.target);
    const entries = data.entries();
    for (let entry of Array.from(entries)) {
      const key = entry[0] as 'email' | 'password';
      const val = entry[1] as string;
      user[key] = val;
    }

    console.log('user', user);
    e.target.reset();
  };

  return (
    <Box
      display="flex"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
    >
      <Box width="64%">
        <StyledTitle>Login</StyledTitle>
        <StyledForm onSubmit={onFormSubmit}>
          <StyledInputWrapper>
            <StyledLabel htmlFor="user-email"> Your Email</StyledLabel>
            <StyledInput
              id="user-email"
              name="email"
              type="email"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
              required
            ></StyledInput>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="user-password"> Password</StyledLabel>
            <StyledInput
              id="user-password"
              name="password"
              type="text"
              pattern=".{4,}"
              placeholder="Password"
              required
            ></StyledInput>
          </StyledInputWrapper>
          <StyledInputSpan>Forgot password?</StyledInputSpan>

          <StyledSubmitButton type="submit" ref={ref}>
            Sign In
          </StyledSubmitButton>
          <Box
            m="0 auto"
            fontFamily="Lato"
            fontSize={14}
            fontWeight={600}
            lineHeight={1.57}
          >
            <span>Don’t have account?&nbsp;</span>
            <Link
              href="/auth/register"
              style={{ color: 'var(--first-bg-color)' }}
            >
              Sign Up
            </Link>
          </Box>
        </StyledForm>
      </Box>
    </Box>
  );
}
