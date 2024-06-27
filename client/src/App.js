// App.js (or any component)
import React from 'react';
import Button from './components/Button';
import { useTheme } from './theme/themeContext';

const App = () => {
  const { colors, toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-background text-text min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Hello, world!</h1>
          <p style={{ color: colors.text, background: colors.background }}>This is styled text.</p>
          <Button onClick={toggleTheme} label={"Toggle Theme"} />
        </div>
      </div>
      <div>
        <p>THis is glbal</p>
      </div>
    </>
  );
};

export default App;
