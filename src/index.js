import React from 'react';
import { ThemeProvider } from "styled-components";
import ReactDOM from 'react-dom/client';

import theme from './theme';

import './reset.css';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

