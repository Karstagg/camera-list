import React from 'react'
import Styled from 'styled-components'

import img from '../assets/images/nav.svg'
const NavBar = Styled.div`
  width: 100%;
  height: 120px; 
  background-image: url(${img});
  background-size: cover;
  background-position: center;
`
function Nav(props) {
  return <NavBar/>;
}

export default Nav