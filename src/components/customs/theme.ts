import * as enums from '../../enums/index.js';
import type { DefaultTheme } from 'styled-components';

const theme = {
  colors: {
    primaryDefault: '#4caf50',
    primaryLighter: ' #6fbf73',
    primaryDarker: '#357a38',
    secondaryDefault: '#00e5ff',
    secondaryLighter: '#33eaff',
    secondaryDarker: '#00a0b2',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  transition: {
    fast: '0.3s all ease-in-out',
    default: '0.5s all ease-in-out',
    semiSlow: '0.75s all ease-in-out',
    slow: '1s all ease-in-out',
  },
  shadows: {
    default: '#888888',
    black: '#000000',
  },
  appState: enums.EActiveAppStates.Active,
};

export const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    default: '#1e1e1e',
    semiDefault: 'rgba(30, 30, 30, 0.7)',
    opposite: '#fafbfb',
  },
  background: {
    default: '#fafbfb',
    semiTransparent: 'rgba(250,251,251, 0.99)',
    opposite: 'rgba(95, 95, 95, 0.99)',
  },
  themeState: enums.EThemes.Light,
};

export const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    default: '#fafbfb',
    semiDefault: 'rgba(250, 251, 251, 0.7)',
    opposite: '#1e1e1e',
  },
  background: {
    default: '#333333',
    semiTransparent: 'rgba(95, 95, 95, 0.99)',
    opposite: 'rgba(250,251,251, 0.99)',
  },
  themeState: enums.EThemes.Dark,
};

export default theme;
