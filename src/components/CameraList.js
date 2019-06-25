import React from "react"
import Card from "./Card"
import Styled from "styled-components"

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

const Grid = Styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width: 65%;
  margin-left: 17.5%;
  margin-right: 17.5%;
  margin-top : 50px;
  @media only screen and (max-width: 812px) {
    grid-template-columns: 100% ;
    width: 100%;
  margin-left: 0;
  margin-right: 0;
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
    console.log(allDevices)
    if (this.state.sort === "name") {
      return <Grid>
        {
          allDevices.map((device, index) => (
            <div key={index}>
              <Card device={device} search={this.state.search}/>
            </div>
          ))
        }
      </Grid>
    } else {
      return <div>
        <Grid>
          {
            activeDevices.map((device, index) => (
              <div key={index}>
                <Card device={device} search={this.state.search}/>
              </div>
            ))
          }
        </Grid>
        <Grid>
          {
            inactiveDevices.map((device, index) => (
              <div key={index}>
                <Card device={device} search={this.state.search}/>
              </div>
            ))
          }
        </Grid>
      </div>
    }
  }
}

export default CameraList