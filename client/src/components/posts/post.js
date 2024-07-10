import React from 'react'
import { FaComment, FaShare, FaThumbsUp } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import CommentSection from './commentSection'

const StyledPostLeftDiv = styled.div`
width:55%;
height:500px;
 background-color:${({ theme }) => theme.colors.primary};
 margin:10px 0;
 border-radius:20px;
 overflow:hidden;
`
const PostHeaderDiv = styled.div`
height:10%;
display: flex;
 background-color:${({ theme }) => theme.colors.text};
 justify-content: space-between;
 align-items: center;
 padding: 0px 10px;
 font-size:15px;
`
const PostHeaderChildDiv = styled.div`
display: flex;
 align-items: center;
 gap: 10px;
`
const PostUserImage = styled.img`
height: 40px;
 width: 40px;
border-radius: 50px;
 cursor: pointer;
 object-fit: cover;
 object-position:center;
  `
const PostImage = styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover;  
  `

const PostFooterDiv = styled.div`
  height:10%;
  display: flex;
   background-color:${({ theme }) => theme.colors.text};
   justify-content: space-between;
   align-items: center;
   padding: 0px 10px;
  `
const PostFooterChildDiv = styled.div`
width:100%;
  display: flex;
   align-items: center;
   gap: 10px;
   `
const PostActionButton = styled.button`
color: black;
 background-color: white; 
 width: 100%; 
 display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  transition:all 100ms ease-in;
  &:hover{
  color:${({ theme }) => theme.colors.primary};
  transform:scale(1.1);
  }`

const StyledPostRightDiv = styled.div`
width:40%;
height:500px;
 background-color:${({ theme }) => theme.colors.text};
 margin:10px 0;
 border-radius:20px;
 overflow:hidden;
 padding:20px
`

const StyledPostInfo = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 gap:6px;
`
const StyledPostLabel = styled.p`
 color:black;
 font-size:18px;
`
const StyledPostDesc = styled.p`
 color:gray;
 font-size:12px;
`


const Post = ({ data }) => {
  const { theme } = useTheme()
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <StyledPostLeftDiv theme={theme}>
        <PostHeaderDiv theme={theme}>
          <PostHeaderChildDiv>
            <PostUserImage src={data.userImage} />
            <p style={{ color: "black", cursor: 'pointer' }}>{data.username}</p>
          </PostHeaderChildDiv>
          <PostHeaderChildDiv>
            <p style={{ color: "black" }}><FaEllipsisVertical size={25} /> </p>
          </PostHeaderChildDiv>
        </PostHeaderDiv>

        <div style={{ height: "80%" }}>
          <PostImage src={data.image} />
        </div>
        <PostFooterDiv theme={theme}>
          <PostFooterChildDiv>
            <PostActionButton theme={theme}><FaThumbsUp /> Like</PostActionButton>
            <PostActionButton theme={theme}><FaComment /> Comment</PostActionButton>
            <PostActionButton theme={theme}><FaShare /> Share</PostActionButton>
          </PostFooterChildDiv>
        </PostFooterDiv>

      </StyledPostLeftDiv >
      <StyledPostRightDiv theme={theme}>
        <StyledPostInfo theme={theme}>
          <StyledPostLabel>{data.label}</StyledPostLabel>
          <StyledPostDesc>{data.description}</StyledPostDesc>
          <CommentSection comments={data.comments} />
        </StyledPostInfo>
      </StyledPostRightDiv>
    </div>

  )
}

export default Post