import { createAction, createReducer } from '@reduxjs/toolkit';

type TUserEmail = { email: 'string' } | null;
type IUser = { user: TUserEmail };
export const setUser = createAction<TUserEmail>('user');

const initialState: IUser = {
  user: { email: 'string' },
};

export const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUser, (state, action) => {
    console.log('state', state);
    state.user = action.payload;
  });
});
