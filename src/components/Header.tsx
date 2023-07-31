import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';

const StyledHeader = styled(AppBar)`
background-color: #C4A484;
color: #000;
font-size: 30px;
font-weight: 600;
position: static;
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Toolbar>
          Notes App
      </Toolbar>
    </StyledHeader>
  )
}

export default Header;