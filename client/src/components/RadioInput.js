import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/themeContext';

const RadioInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const RadioButton = ({ label, checked, onChange }) => {
  const { theme } = useTheme();

  return (
    <RadioLabel theme={theme}>
      <RadioInput type="radio" checked={checked} onChange={onChange} theme={theme} />
      {label}
    </RadioLabel>
  );
};

export default RadioButton;
