import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useSideBar } from '../context/sidebarContext';
import { useTheme } from '../context/themeContext';

const ToggleButton = styled.button`
position:absolute;
top:20px;
left:20px;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;


const StyledDiv = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledSearchContainer = styled.div`
  position: relative;
  width: 600px; `;

const StyledSearch = styled.input`
  border-radius: 20px;
  padding: 10px 40px 10px 20px;
  width: 100%;
  border: 2px solid transparent;
  transition: all 0.3s ease-in;
  color: ${({ theme }) => theme.colors.primary};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.background};
    outline: none;
  }
`;

const StyledSearchButton = styled(FaSearch)`
  position: absolute;
  color: ${({ theme }) => theme.colors.background};
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
    cursor:pointer;
`;

const Header = () => {
  const { theme } = useTheme();
  const { toggleSidebar } = useSideBar()

  return (
    <>
      <ToggleButton onClick={toggleSidebar} theme={theme}>
        <FaBars />
      </ToggleButton>

      <StyledDiv theme={theme}>
        <p>Blissify</p>
        <StyledSearchContainer>
          <StyledSearch placeholder="Search..." theme={theme} />
          <StyledSearchButton theme={theme} size={20} />
        </StyledSearchContainer>
        <p>Logout</p>
      </StyledDiv>
    </>
  );
};

export default Header;
