import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'

const StyledDiv = styled.div`
width:90%;
border-radius:20px;
margin:0 auto;
padding:5px 5px;
display:flex;
align-items:center;
background-color:${({ theme }) => theme.colors.background};
border-top:2px solid ${({ theme }) => theme.colors.primary};
transition:all 200ms linear;
&:hover{
transform:scale(1.08);
margin:5px auto;
}`

const StyledImage = styled.div`
width:50px;
height:50px;
background-color:${({ theme }) => theme.colors.primary};
border-radius:50%`

const StyledInfo = styled.div`
width:80%;
display:flex;
justify-content:center;
padding:0px 0px 0px 5px;
flex-direction:column;`

const UserChat = ({ data }) => {
    const { theme } = useTheme()
    return (
        <StyledDiv theme={theme}>
            <StyledImage theme={theme} />
            <StyledInfo>
                <div >{data.name}</div>
                <div style={{ fontSize: "10px", color: "gray", display: 'flex', justifyContent: "space-between", width: "100%", paddingRight: "5px" }}>
                    <div>
                        {data.lastMessage}
                    </div>
                    <div>
                        {data.date}
                    </div>
                </div>

            </StyledInfo>
        </StyledDiv>
    )
}

export default UserChat