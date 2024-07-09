import styled from 'styled-components';
import { useTheme } from '../../context/themeContext';

const ButtonComponent = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border: none;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  cursor: pointer;
  transition:all 500ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Button = ({ onClick, label }) => {
  const { theme } = useTheme();

  return <ButtonComponent theme={theme} onClick={onClick} >{label}</ButtonComponent>
}

