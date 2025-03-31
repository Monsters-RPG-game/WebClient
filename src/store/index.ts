import { configureStore } from '@reduxjs/toolkit';
import account from '../redux/reducers/account.js';
import notifications from '../redux/reducers/notifications.js';

const mainStore = configureStore({
  reducer: {
    notifications,
    account,
  },
});

export default mainStore;
