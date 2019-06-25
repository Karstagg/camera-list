import React from "react"
import Card from "./Card"
import Styled from "styled-components"
import Label from "./label"

const devicesData = require("../data/sample-devices")
const devicesStatus = require("../data/sample-status")
const devices = devicesData.devices
const statuses = devicesStatus.status
//const status = devicesData.devices
let allDevices = []
let activeDevices = []
let inactiveDevices = []

for (let i = 0; i < devices.length; i++) {
  for (let j = 0; j < statuses.length; j++) {
    if (devices[i].id === statuses[j].deviceId) {
      if (statuses[j].active === true) {
        activeDevices[devices[i].id] = [devices[i], statuses[j]]
      } else {
        inactiveDevices[devices[i].id] = [devices[i], statuses[j]]
      }
      allDevices[devices[i].id] = [devices[i], statuses[j]]
    }
  }
}
const Container = Styled.div`
  width: 65%;
  margin-left: 17.5%;
  margin-right: 17.5%;
  margin-top : 40px;
  @media only screen and (max-width: 812px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`
const Grid = Styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  margin-top : 40px;
  @media only screen and (max-width: 812px) {
    grid-template-columns: 100% ;
    
  }
`

class CameraList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: "active",
      search: ''
    }
  }

  render() {

    if (this.state.sort === "name") {
      return <Container>
        <Label label="All Devices" count={allDevices.length}/>
        <Grid>
        {
          allDevices.map((device, index) => (
            <div key={index}>
              <Card device={device} search={this.state.search}/>
            </div>
          ))
        }
      </Grid>
      </Container>
    } else {
      return <div>
      <Container>
        <Label label="Active Devices" count={activeDevices.length}/>
        <Grid>
          {
            activeDevices.map((device, index) => (
              <div key={index}>
                <Card device={device} search={this.state.search}/>
              </div>
            ))
          }
        </Grid>
        </Container>
        <Container>
        <Label label="Inactive Devices" count={inactiveDevices.length}/>
        <Grid>
          {
            inactiveDevices.map((device, index) => (
              <div key={index}>
                <Card device={device} search={this.state.search}/>
              </div>
            ))
          }
        </Grid>
      </Container>
      </div>
    }
  }
}

export default CameraList