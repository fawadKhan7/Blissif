import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/themeContext';

// Styled checkbox input
const CheckboxInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.secondary};
    }
    `;

// Styled label for the checkbox
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

// Actual Checkbox component
const Checkbox = ({ label, checked, onChange }) => {
  const { theme } = useTheme();

  return (
    <CheckboxLabel theme={theme}>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} theme={theme} />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
