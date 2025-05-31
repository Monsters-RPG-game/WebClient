import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material';
import React, { useState } from 'react';
import * as enums from './enums/index.js';
import getMuiTheme from './components/customs/theme.js';
import ViewsController from './components/generic/views/ViewsController.js';

const App = (): React.JSX.Element => {
  const [theme, setTheme] = useState<enums.EThemes>(enums.EThemes.Light);
  const appTheme = getMuiTheme(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={appTheme}>
          <BrowserRouter>
            <ViewsController theme={theme} setTheme={setTheme} />
          </BrowserRouter>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
