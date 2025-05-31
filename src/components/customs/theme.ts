import { createTheme } from '@mui/material/styles';
import type { EActiveAppStates, EThemes } from '../../enums';
import type { Theme } from '@mui/material/styles';

interface IAppTheme extends Theme {
  appState: EActiveAppStates;
}

const getMuiTheme = (mode: EThemes, appState: EActiveAppStates): IAppTheme =>
  createTheme({
    palette: {
      mode,
    },
    appState,
  }) as IAppTheme;

export default getMuiTheme;
