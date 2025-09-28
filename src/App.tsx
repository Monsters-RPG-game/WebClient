import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import type { DefaultTheme } from 'styled-components';
import * as enums from './enums/index.js';
import * as themes from './components/customs/theme.js';
import Theme, { GlobalStyle } from './components/customs/index.js';
import ViewsController from './components/generic/views/ViewsController.js';

const App = (): React.JSX.Element => {
  const [appActive, setAppActive] = useState<enums.EActiveAppStates>(enums.EActiveAppStates.Inactive);
  const [theme, setTheme] = useState<DefaultTheme>(themes.lightTheme);

  return (
    <Theme theme={theme} appState={appActive}>
      <BrowserRouter>
        <GlobalStyle />
        <ViewsController appActive={appActive} setAppActive={setAppActive} setTheme={setTheme} />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
