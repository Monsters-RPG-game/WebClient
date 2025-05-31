/* eslint-disable */
import type mainStore from '../store';

declare global {

  interface Window {
    store: typeof mainStore;
  }
}

export {};
