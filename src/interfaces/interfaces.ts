export type TDeals = {
  _id: string;
  name: string;
  image: string;
  price: number;
  ticket: number;
  yield: number;
  daysLeft: number;
  sold: number;
};

export type TUser = {
  email: string;
  password: string;
};
