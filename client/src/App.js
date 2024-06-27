// App.js (or any component)
import React from 'react';
import { Auth } from './pages/auth';
import { useTheme } from './theme/themeContext';

const App = () => {
  const { colors, toggleTheme } = useTheme();

  return (
    <>
      <Auth />
    </>
  );
};

export default App;
