import { TUser } from '@/interfaces/interfaces';

const SITE = 'https://the-chemical.onrender.com';

export const getOpenDeals = async () => {
  return (await fetch(`${SITE}/api/deals`).then(res => res.json())) as any[];
};

export const addNewUserToDB = async ({
  email,
  password1: password,
}: {
  email: string;
  password1: string;
}) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  return (await fetch(`${SITE}/api/users/register`, params).then(res =>
    res.json()
  )) as any;
};

export const getUser = async (user: TUser) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  return (await fetch(`${SITE}/api/users/login`, params).then(res =>
    res.json()
  )) as any;
};
