import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { store } from './app/store/appStore';
import { checkAuthStatus } from './features/authorization';

store.dispatch(checkAuthStatus());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
