import styled from "styled-components";
import { useTheme } from "../theme/themeContext";

const InputComponent = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 10px;
  width: 350px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  color:black;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: all 0.3s ease;

  ${InputComponent}:focus + & {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const InputField = ({ label, name, value, placeholder, required = false, style, type = 'text', onChange }) => {
    // const theme = useTheme();
    const { theme } = useTheme();


    return (
        <div className="flex flex-col">
            {label && <InputLabel theme={theme}>{label}</InputLabel>}
            <InputComponent style={style} theme={theme} placeholder={placeholder || ''} required={required} name={name} value={value} type={type}
                onChange={onChange} />
        </div>
    );
};
