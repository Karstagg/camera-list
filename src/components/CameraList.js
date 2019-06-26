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
        activeDevices.push([devices[i], statuses[j]])
      } else {
        inactiveDevices.push([devices[i], statuses[j]])
      }
      allDevices.push([devices[i], statuses[j]])
    }
  }
}

//sort arrays
allDevices.sort(function(a, b) {
  if (a[0].name.toLowerCase() < b[0].name.toLowerCase()) {
    return -1
  }
  if (a[0].name.toLowerCase() > b[0].name.toLowerCase()) {
    return 1
  }
  return 0
})
activeDevices.sort(function(a, b) {
  if (a[0].name.toLowerCase() < b[0].name.toLowerCase()) {
    return -1
  }
  if (a[0].name.toLowerCase() > b[0].name.toLowerCase()) {
    return 1
  }
  return 0
})
inactiveDevices.sort(function(a, b) {
  if (a[0].name.toLowerCase() < b[0].name.toLowerCase()) {
    return -1
  }
  if (a[0].name.toLowerCase() > b[0].name.toLowerCase()) {
    return 1
  }
  return 0
})
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
const SearchArea = Styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  padding-bottom: 30px;
`
const Search = Styled.input`
width: 100%;
height: 25px;
`
const FilterDiv = Styled.div`
  justify-self: end;
`
const Filter = Styled.select`
  height: 30px;
  width: 100px;
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
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
    this.state = {
      sort: "name",
      search: "",
    }
  }

  handleChangeText(event) {
    this.setState({ search: event.target.value })
  }

  handleChangeSelect(event) {
    this.setState({ sort: event.target.value })
  }

  renderFilter() {
    return <div>
      <h1>Your Cameras</h1>
      <p>Total({allDevices.length})</p>
      <SearchArea>
        <div>
          <Search className="search" placeholder="search" type="text" name="search" value={this.state.search}
                  onChange={this.handleChangeText}/>
        </div>
        <FilterDiv>
          <Filter data-icon="../assets/icons/shape.png" onChange={this.handleChangeSelect}>
            <option value="name">Sort by name</option>
            <option value="active">Active</option>
          </Filter>
        </FilterDiv>
      </SearchArea>
    </div>
  }

  render() {
    if (this.state.sort === "name") {
      return <Container>
        {this.renderFilter()}
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
          {this.renderFilter()}
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