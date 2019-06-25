import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
  width: 300px;
  height: 300px; 
  margin: 0 auto;
`
const CardBody = Styled.div`
  width: 100%;
  height: 80%; 
  background-color: red;
`
const CardFooter = Styled.div`
  width: 100%;
  height: 20%; 
  background-color: black;
`
function Nav(props) {
  return <Card>
    <CardBody/>
    <CardFooter/>
  </Card>
}

export default Nav