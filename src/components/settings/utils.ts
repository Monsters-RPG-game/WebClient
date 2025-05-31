import type React from 'react';
import { EThemes } from '../../enums/index.js';

const changeTheme = (setTheme: React.Dispatch<React.SetStateAction<EThemes>>, theme: EThemes): void => {
  theme === EThemes.Light ? setTheme(EThemes.Dark) : setTheme(EThemes.Light);
};

export default changeTheme;
