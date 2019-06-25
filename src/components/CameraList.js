import React from 'react'
import Card from './Card';
import Styled from 'styled-components';
const devicesData = require('../data/sample-devices');
const devicesStatus = require('../data/sample-status');
const devices = devicesData.devices
const statuses = devicesStatus.status
//const status = devicesData.devices

//this is will work for now but on a disorganized dataset it will fail - fix if there is time
let deviceData = devices.map((x, i) => [x, statuses[i]]);

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
  render() {
    console.log(deviceData)
    return <Grid>
      {
        deviceData.map((device, index) => (
          <div key={index}>
            <Card device={device}/>
          </div>
        ))
      }
      </Grid>

  }
}

export default CameraList