import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [appTheme, setAppTheme] = useState("boy");

    const toggleTheme = () => {
        setAppTheme(prevTheme => (prevTheme === "boy" ? "girl" : "boy"));
    };

    const themes = {
        boy: {
            primary: '#FF5F00',
            secondary: '#002379',
            background: '#FF9F66',
            text: '#ffff',
        },
        girl: {
            primary: '#FD367E',
            secondary: '#4C0033',
            background: '#FF69B4',
            text: '#ffff',
        }
    }

    const theme = {
        colors: themes[appTheme],
        fonts: {
            main: 'Roboto, sans-serif',
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
        <ThemeContext.Provider value={{ theme, setAppTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
