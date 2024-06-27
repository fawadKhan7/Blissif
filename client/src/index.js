import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from './theme/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
