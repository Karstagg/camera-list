import React from "react"
import Styled from "styled-components"

const Card = Styled.div`
  width: 300px;
  height: 300px; 
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 20px 0 rgba(0, 0, 0, 0.23);
  }
`
const CardBody = Styled.div`
  width: 100%;
  height: 80%; 
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0px 0px;
`
const CardFooter = Styled.div`
  width: 100%;
  height: 20%; 
  background-color: white;
  color: black;
  border-radius: 0px 0px 15px 15px;
  text-align: left;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width: 100%;
`
const CardIndicator = Styled.div`
 margin-top: 5px;
 height: 75%;
 width: 10px;
 margin-left 10px;
 border-radius: 15px;
`
const FooterText = Styled.div`
  margin-top: 5px;
`
const FooterDesc = Styled.div`
  padding-top: 5px;
  max-width: 250px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`

function Nav(props) {
  let device = props.device

    return <Card>
      <CardBody style={device.active ? { backgroundImage: `url(${device.thumbnail})` } : {
        backgroundImage: `url(${device.thumbnail})`,
        filter: "opacity(0.6)",
      }}/>
      <CardFooter>
        <CardIndicator style={device.active ? { backgroundColor: "#1DD387" } : { backgroundColor: "#CA6060" }}/>
        <FooterText>
          <div style={{fontSize: "0.7em"}}>{device.active ? "ACTIVE" : "INACTIVE"}</div>
          <FooterDesc>{device.name}</FooterDesc>
        </FooterText>
      </CardFooter>
    </Card>
}

export default Nav
