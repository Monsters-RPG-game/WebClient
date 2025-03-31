import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAccount {
  id: string;
}

export interface IAccountState {
  id: string | undefined;
}

export interface IAddAccountActionBody {
  id: string;
}

export type IAddAccountAction = PayloadAction<IAddAccountActionBody>;
