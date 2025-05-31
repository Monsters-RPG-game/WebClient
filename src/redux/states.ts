import type * as types from './types/index.js';
import type { RootMainState } from '../store/types.js';

// eslint-disable-next-line import/prefer-default-export
export const accountState = (state: RootMainState): types.IAccountState => state.account;
