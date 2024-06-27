import { createGlobalStyle } from 'styled-components';
import { useTheme } from './theme/themeContext'; // Adjust the path as per your project structure

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px; /* Adjust font size as needed */
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
  }
`;

const GlobalStyles = () => {
  const theme = useTheme();

  return <GlobalStyle theme={theme} />;
};

export default GlobalStyles;