import { configureStore } from '@reduxjs/toolkit';
import account from '../redux/reducers/account.js';

const mainStore = configureStore({
  reducer: {
    account,
  },
});

export default mainStore;
