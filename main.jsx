import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { AppContextProvider } from './Context/AppContext.jsx';
import Router from './Router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </Provider>
  </StrictMode>
);
