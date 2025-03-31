import React, { StrictMode } from 'react'
import mainStore from './store/index.js';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './styles/fontello/css/fontello.css'
import App from './App.js';

const target = document.getElementById('root');
const root = ReactDOM.createRoot(target!);

const Root = (): React.JSX.Element => {
  return (
    <StrictMode>
      <Provider store={mainStore}>
        <App />
      </Provider>
    </StrictMode>
  );
};

root.render(<Root/>);
