import React from 'react'
import Card from './Card';
import Styled from 'styled-components';
const devicesData = require('../data/sample-devices');
const devices = devicesData.devices

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
    console.log(devices[0])
    return <Grid>
      {
        devices.map((device, index) => (
          <div key={index}>
            <Card device={device}/>
          </div>
        ))
      }
      </Grid>

  }
}

export default CameraList