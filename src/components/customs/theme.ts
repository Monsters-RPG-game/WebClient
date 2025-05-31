import { createTheme } from '@mui/material/styles';
import type { EThemes } from '../../enums';
import type { Theme } from '@mui/material/styles';

const getMuiTheme = (mode: EThemes): Theme =>
  createTheme({
    palette: {
      mode,
    },
  });

export default getMuiTheme;
