import React from "react"
import Styled from "styled-components"

const Card = Styled.div`
  width: 300px;
  height: 300px; 
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  console.log(props)
  let deviceInfo = props.device[0]
  let deviceStatus = props.device[1]

  if (props.search == deviceInfo.id || !deviceInfo.name.toLowerCase().indexOf(props.search.toLowerCase() ) || props.search === "") {
    return <Card>
      <CardBody style={deviceStatus.active ? { backgroundImage: `url(${deviceStatus.thumbnail})` } : {
        backgroundImage: `url(${deviceStatus.thumbnail})`,
        filter: "opacity(0.6)",
      }}/>
      <CardFooter>
        <CardIndicator style={deviceStatus.active ? { backgroundColor: "#1DD387" } : { backgroundColor: "#CA6060" }}/>
        <FooterText>
          <div style={{fontSize: "0.7em"}}>{deviceStatus.active ? "ACTIVE" : "INACTIVE"}</div>
          <FooterDesc>{deviceInfo.name}</FooterDesc>
        </FooterText>
      </CardFooter>
    </Card>
  } else {
    return null
  }
}

export default Nav