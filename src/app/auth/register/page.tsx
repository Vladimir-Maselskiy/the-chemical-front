'use client';
import { Box } from '@/components/Box/Box';
import {
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledSubmitButton,
  StyledTitle,
} from '@/components/UserForm/UserForm.styled';
import { addNewUserToDB } from '@/utils/api';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux/hooks';
import { setUser } from '@/redux/reducers';

export default function RegisterPage() {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [password1Input, setPassword1Input] = useState('');
  const [password2Input, setPassword2Input] = useState('');
  const [userEmailError, setUserEmailError] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { user } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  useEffect(() => {
    if (password1Input === password2Input && password1Input.length > 3) {
      setIsSubmitButtonDisabled(false);
    }
  }, [password1Input, password2Input]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmailInput(value);
        setUserEmailError(false);
        break;
      case 'password1':
        setPassword1Input(value);
        break;
      case 'password2':
        setPassword2Input(value);
        break;
    }
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    let newUser = {
      email: '',
      password1: '',
      password2: '',
    };

    const data = new FormData(e.target);
    const entries = data.entries();
    console.log('entries', entries);
    for (let entry of Array.from(entries)) {
      const key = entry[0] as 'email' | 'password1' | 'password2';
      const val = entry[1] as string;
      newUser[key] = val;
    }

    try {
      const res = await addNewUserToDB(newUser);
      if (res.error) {
        setUserEmailError(true);
        return;
      } else {
        e.target.reset();
        localStorage.setItem('user', JSON.stringify({ email: res.email }));
        dispatch(setUser({ email: res.email }));
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
        <StyledTitle>Register</StyledTitle>
        <StyledForm onSubmit={onFormSubmit}>
          <StyledInputWrapper>
            <StyledLabel htmlFor="user-email"> Your Email</StyledLabel>
            <StyledInput
              value={emailInput}
              onChange={onChangeInput}
              id="user-email"
              name="email"
              type="email"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}"
              required
            ></StyledInput>
            {userEmailError && (
              <span style={{ color: 'red', fontSize: 14 }}>
                Email is already used
              </span>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="user-password1"> Password</StyledLabel>
            <StyledInput
              value={password1Input}
              onChange={onChangeInput}
              id="user-password1"
              name="password1"
              type="text"
              pattern=".{4,}"
              placeholder="Password"
              required
            ></StyledInput>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="user-password2">Confirm password</StyledLabel>
            <StyledInput
              value={password2Input}
              onChange={onChangeInput}
              id="user-password2"
              name="password2"
              type="text"
              pattern=".{4,}"
              placeholder="Password"
              required
            ></StyledInput>
          </StyledInputWrapper>

          <StyledSubmitButton
            type="submit"
            ref={ref}
            disabled={isSubmitButtonDisabled}
          >
            Sign Up
          </StyledSubmitButton>
          <Box
            m="0 auto"
            fontFamily="Lato"
            fontSize={14}
            fontWeight={600}
            lineHeight={1.57}
          >
            <span>Do you have account?&nbsp;</span>
            <Link href="/auth/login" style={{ color: 'var(--first-bg-color)' }}>
              Sign In
            </Link>
          </Box>
        </StyledForm>
      </Box>
    </Box>
  );
}
