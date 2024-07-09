import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { useSideBar } from '../../context/sidebarContext';
import { useTheme } from '../../context/themeContext';
import UserChat from '../chats/UserChat';

const data = [
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
  { id: 1, name: "Joe", lastMessage: "Hey", date: "1-1-12" },
  { id: 2, name: "Jey", lastMessage: "Hey Joe", date: "2-1-12" },
]



const StyledDiv = styled.div`
border-radius:0px 20px 0px 20px;
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 80px;
  left: -300px;
  transition: left 0.3s ease-in-out;
  ${(props) =>
    props.isVisible &&
    css`
      left: 0;
    `}
`;

const StyledSearchContainer = styled.div`
  position: relative;
  width: 100%;
  padding:10px 30px`;

const StyledSearch = styled.input`
  border-radius: 20px;
  border:solid 2px ${({ theme }) => theme.colors.background};
  padding: 10px 40px 10px 20px;
  width: 100%;
  transition: all 0.3s ease-in;
  color: ${({ theme }) => theme.colors.primary};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const StyledSearchButton = styled(FaSearch)`
  position: absolute;
  color: ${({ theme }) => theme.colors.background};
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  cursor:pointer;
`;

const UserChatStyledDiv = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) => theme.colors.background};

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 20px; /* Adjust the border radius as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 20px; /* Match the scrollbar border radius */
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 20px; /* Match the scrollbar border radius */
  }
`;// scrollbar-width: none;


const Sidebar = () => {
  const { theme } = useTheme()
  const { isVisible } = useSideBar()

  return (
    <>
      {/* <ToggleButton onClick={toggleSidebar} theme={theme}>
        <FaBars />
      </ToggleButton> */}

      <StyledDiv isVisible={isVisible} theme={theme}>
        <StyledSearchContainer>
          <StyledSearch placeholder="Search..." theme={theme} />
          <StyledSearchButton theme={theme} size={20} />
        </StyledSearchContainer>
        <UserChatStyledDiv theme={theme}>
          {data.map((elem) => (
            <UserChat key={elem.id} data={elem} />
          ))}
        </UserChatStyledDiv>
      </StyledDiv>
    </>
  );
};


export default Sidebar