import React from 'react'
import styled from 'styled-components'
import Post from '../components/posts/post'
import { useTheme } from '../context/themeContext'
import dummyData from '../data/dummyData'
import { hexToRgba } from '../utils/stylesHelper'

const StyledDiv = styled.div`
width: 60%;
margin: 80px auto 10px auto;
  height: 100%;
border-radius: 40px;
padding: 20px;
 background-color: ${({ theme }) => hexToRgba(theme.colors.primary, 0.3)};
`

const HomeGallery = () => {
    const { theme } = useTheme()
    return (
        <StyledDiv theme={theme}>
            {dummyData?.map(data =>
                <Post key={data.id} data={data} />
            )}

        </StyledDiv>
    )
}

export default HomeGallery