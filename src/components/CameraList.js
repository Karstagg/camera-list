import React from 'react'
import Card from './Card';
import Styled from 'styled-components';
const devicesData = require('../data/sample-devices');
const devices = devicesData.devices

const Grid = Styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  width: 80%;
  margin-left: 10%;
`

class CameraList extends React.Component {
  render() {
    console.log(devices[0])
    return <Grid>
      {
        devices.map((device, index) => (
          <div key={index}>
            <Card></Card>
          </div>
        ))
      }
      </Grid>

  }
}

export default CameraList