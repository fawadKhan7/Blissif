import React from 'react';
import { useTheme } from '../theme/themeContext';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const StyledDiv = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearchContainer = styled.div`
  position: relative;
  width: 600px; `;

const StyledSearch = styled.input`
  border-radius: 20px;
  padding: 10px 40px 10px 10px; /* Adjust padding to accommodate the search button */
  width: 100%; /* Take full width */
  border: 2px solid transparent;
  transition: all 0.3s ease-in;
  color: black;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.background};
    outline: none;
  }
`;

const StyledSearchButton = styled(FaSearch)`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Header = () => {
    const { theme } = useTheme();

    return (
        <StyledDiv theme={theme}>
            <p>Blissify</p>
            <StyledSearchContainer>
                <StyledSearch placeholder="Search..." theme={theme} />
                <StyledSearchButton theme={theme} size={20} />
            </StyledSearchContainer>
            <p>Logout</p>
        </StyledDiv>
    );
};

export default Header;
