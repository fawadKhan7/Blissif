import { createGlobalStyle } from 'styled-components';
import { useTheme } from './context/themeContext';


const GlobalStyle = createGlobalStyle`
 @tailwind base;
  @tailwind components;
  @tailwind utilities;
    body {
    margin: 0;
    padding: 0;
    font-size: 16px; /* Adjust font size as needed */
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    overflow-x:hidden;
  }
`;

const GlobalStyles = () => {
  const { theme } = useTheme();

  return <GlobalStyle theme={theme} />;
};

export default GlobalStyles;