import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useSideBar } from '../../context/sidebarContext';
import { useTheme } from '../../context/themeContext';

const ToggleButton = styled.button`
position:fixed;
top:16px;
left:20px;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
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
  width:100%;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family:${({ theme }) => theme.fonts.main};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
`;

const StyledSearchContainer = styled.div`
  position: relative;
  width: 600px; 
  `
// const StyledSearchContainer = styled.div`
//   position: relative;
//   min-width: 400px; 
//   max-width: 600px; 
//   `

const StyledSearch = styled.input`
  border-radius: 20px;
  padding: 10px 40px 10px 20px;
  width: 90%;
  margin:0px 50px 0px 10px;
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
  right: 12%;
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
