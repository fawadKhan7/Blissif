import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const theme = {
        colors: darkMode
            ? {
                background: '#1a1a1a',
                text: '#ffffff',
            }
            : {
                background: '#ffffff',
                text: '#333333',
            },
        fonts: {
            main: 'Helvetica, Arial, sans-serif',
            code: 'Courier, monospace',
        },
        spacing: {
            xs: '4px',
            sm: '8px',
            md: '16px',
            lg: '32px',
            xl: '64px',
        },
        breakpoints: {
            mobile: '576px',
            tablet: '768px',
            laptop: '1024px',
            desktop: '1200px',
        },
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>

            {children}
        </ThemeContext.Provider>
    );
};
