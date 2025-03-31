import { createSlice } from '@reduxjs/toolkit';
import type * as types from '../types/index.js';

const account = createSlice({
  name: 'account',
  initialState: { id: undefined } as types.IAccountState,
  reducers: {
    logIn(state, action: types.IAddAccountAction) {
      state.id = action.payload.id;
      return state;
    },
  },
});

export const { logIn } = account.actions;
export default account.reducer;
