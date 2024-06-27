import styled from 'styled-components';
import { useTheme } from '../theme/themeContext';

const ButtonComponent = styled.button`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.main};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

const Button = ({ onClick, label }) => {
  const theme = useTheme();

  return <ButtonComponent theme={theme} onClick={onClick} >{label}</ButtonComponent>
}

export default Button;
