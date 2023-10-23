export const getOpenDeals = async () => {
  return (await fetch('http://localhost:3001/api/deals').then(res =>
    res.json()
  )) as any[];
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
  return (await fetch('http://localhost:3001/api/users', params).then(res =>
    res.json()
  )) as any;
};
