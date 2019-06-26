import React from 'react'
import Styled from 'styled-components'

const LabelGrid = Styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  @media only screen and (max-width: 812px) {
    margin-left: 10%
    grid-template-columns: 35% 55%;
  }
`
const Hr = Styled.div`
  width: 100%;
  height:1px;
  margin-top: 10px;
  border-top: 1px solid black;
`
function Label(props) {
  return <LabelGrid>
    <div>{props.label} ({props.count})</div><Hr/>
  </LabelGrid>
}

export default Label