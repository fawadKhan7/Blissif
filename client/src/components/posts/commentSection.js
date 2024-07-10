import React from 'react'
import { FaEllipsisVertical } from 'react-icons/fa6'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
const StyledMainComments = styled.div`
padding:5px 10px;
border-radius:10px;
`
const StyledCommentDiv = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:4px;
margin:10px 0;
`
const CommentUserImage = styled.img`
height: 40px;
 width: 40px;
border-radius: 50px;
 cursor: pointer;
 object-fit: cover;
 object-position:center;
  `


const StyledComment = styled.p`
width:100%;
background-color:#EFF0FF;
margin:5px 0px;
padding:5px 10px;
border-radius:10px;
`

const StyledCommentInputDiv = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:5px 0px;
border-radius:10px;
`
const StyledCommentInput = styled.input`
width:78%;
padding:5px 10px;
border:1px solid ${({ theme }) => theme.colors.background};
border-radius:10px;
`

const StyledCommentSendButton = styled.button`
width:20%;
padding:5px ;
border-radius:20px;
background-color:${({ theme }) => theme.colors.primary};
color:${({ theme }) => theme.colors.text};
`
const CommentSection = ({ comments }) => {
    const { theme } = useTheme()
    return (
        <div style={{ color: 'black' }}>
            <p style={{ fontSize: "25px", textAlign: 'center', marginBlock: "5px" }}>Comments</p>

            <StyledMainComments>
                <div style={{ height: "300px", overflowY: 'scroll' }}>
                    {comments?.map(elem =>
                        <StyledCommentDiv>
                            <CommentUserImage src={elem?.image} />
                            <StyledComment>{elem?.comment} </StyledComment>
                            <FaEllipsisVertical />
                        </StyledCommentDiv>
                    )}
                </div>
                <StyledCommentInputDiv theme={theme}>
                    <StyledCommentInput theme={theme} placeholder='Comment...' />
                    <StyledCommentSendButton theme={theme}>Send</StyledCommentSendButton>
                </StyledCommentInputDiv>
            </StyledMainComments>
        </div>
    )
}

export default CommentSection