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
  background-size: cover;
  background-position: center;
`
const CardFooter = Styled.div`
  width: 100%;
  height: 20%; 
  background-color: black;
  color: white;
`
function Nav(props) {
  let deviceInfo = props.device[0];
  let deviceStatus = props.device[1];
  return <Card>
    <CardBody style={deviceStatus.active ? {backgroundImage: `url(${deviceStatus.thumbnail})`} : {backgroundImage: `url(${deviceStatus.thumbnail})`, filter: 'opacity(0.6)'}}/>
    <CardFooter>{deviceInfo.name}</CardFooter>
  </Card>
}

export default Nav