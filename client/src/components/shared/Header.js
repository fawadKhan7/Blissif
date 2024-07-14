import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
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

const StyledUserIcon = styled(FaUser)`
  color: ${({ theme }) => theme.colors.background};
    `;

const StyledListItem = styled.li`
    background-color: ${({ theme }) => theme.colors.primary};
    border:1px solid white;
    padding:8px 20px;
    transition:all 300ms linear;
    &:hover{
      background-color: ${({ theme }) => theme.colors.background};
      cursor:pointer;

  }
`;

const Header = () => {
  const { theme } = useTheme();
  const { toggleSidebar } = useSideBar()
  const [isVisible, setIsVisible] = useState(false)

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
        <div class="dropdown">
          <div style={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: "gray", display: 'grid', placeItems: 'center' }}>
            <StyledUserIcon theme={theme} onClick={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} />
          </div>
          <div style={{ position: 'absolute', right: '2%', visibility: isVisible ? 'visible' : 'hidden' }} >
            <ul onMouseEnter={() => setIsVisible(true)}>
              <StyledListItem theme={theme} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", borderBottomColor: 'transparent' }}>
                <p >Link 1</p>
              </StyledListItem>
              <StyledListItem theme={theme} style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", }}>
                <p >Link 2</p>
              </StyledListItem>
            </ul>
          </div>
        </div>
      </StyledDiv>
    </>
  );
};

export default Header;
