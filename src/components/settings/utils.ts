import type React from 'react';
import { EThemes } from '../../enums/index.js';
import * as themes from '../customs/theme.js';
import type { DefaultTheme } from 'styled-components';

const changeTheme = (setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>, theme: DefaultTheme): void => {
  theme.themeState === EThemes.Light ? setTheme(themes.darkTheme) : setTheme(themes.lightTheme);
};

export default changeTheme;
