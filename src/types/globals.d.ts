/* eslint-disable */
import type { EActiveAppStates } from '../enums';
import type mainStore from '../store';

declare global {

  interface Window {
    store: typeof mainStore;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    appState: EActiveAppStates;
  }

  interface ThemeOptions {
    appState?: EActiveAppStates;
  }
}

export {};
