import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material';
import React, { useState } from 'react';
import * as enums from './enums/index.js';
import getMuiTheme from './components/customs/theme.js';
import ViewsController from './components/generic/views/ViewsController.js';

const App = (): React.JSX.Element => {
  const [appActive, setAppActive] = useState<enums.EActiveAppStates>(enums.EActiveAppStates.Active);
  const [theme, setTheme] = useState<enums.EThemes>(enums.EThemes.Light);
  const appTheme = getMuiTheme(theme, appActive);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={appTheme}>
          <BrowserRouter>
            <ViewsController appActive={appActive} setAppActive={setAppActive} theme={theme} setTheme={setTheme} />
          </BrowserRouter>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
