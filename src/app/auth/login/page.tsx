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
import { getUser } from '@/utils/api';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux/hooks';
import { setUser } from '@/redux/reducers';

export default function LoginPage() {
  const ref = useRef<HTMLButtonElement>(null);
  const [isUserError, setIsUserError] = useState(false);
  const router = useRouter();
  const { user } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  const onInputChange = () => {
    setIsUserError(false);
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const userFromDB = await getUser(user);
      if (!userFromDB || userFromDB.error === 'User not found') {
        setIsUserError(true);
      }
      if (userFromDB.email) {
        dispatch(setUser({ email: userFromDB.email }));
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
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
              onChange={onInputChange}
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
              onChange={onInputChange}
            ></StyledInput>
          </StyledInputWrapper>
          {isUserError && (
            <span style={{ color: 'red', fontSize: 14 }}>
              Incorrect email or password
            </span>
          )}
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
