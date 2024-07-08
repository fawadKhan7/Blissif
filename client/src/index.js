import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyle from './globalStyles';
import "./index.css";
import { ThemeProvider } from './theme/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
