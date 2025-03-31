import type * as types from './types/index.js';
import type { RootMainState } from '../store/types.js';

export const notificationsState = (state: RootMainState): types.INotificationsState => state.notifications;
export const accountState = (state: RootMainState): types.IAccountState => state.account;
