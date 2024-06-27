import { createGlobalStyle } from 'styled-components';
import { useTheme } from './theme/themeContext';

const GlobalStyle = createGlobalStyle`
 @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
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