import React from "react"
import Card from "./Card"
import Styled from "styled-components"
import Label from "./label"

const devicesData = require("../data/sample-devices")
const devicesStatus = require("../data/sample-status")
const devices = devicesData.devices
const statuses = devicesStatus.status

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
   @media only screen and (max-width: 812px) {
    grid-template-columns: 100% ;
    justify-items: center;
  }
`
const Search = Styled.input`
width: 100%;
height: 25px;
 @media only screen and (max-width: 812px) {
    width: 80%;
  }
`
const FilterDiv = Styled.div`
  justify-self: end;
   @media only screen and (max-width: 812px) {
    justify-self: center;
    padding-top: 10px;
  }
`
const Filter = Styled.select`
  height: 30px;
  width: 120px;
  text-align: center;
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
const Heading = Styled.div`
  @media only screen and (max-width: 812px) {
    text-align: center;
  }
`

class CameraList extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleChangeSelect = this.handleChangeSelect.bind(this)

    //flatten arrays into an array with a single object for each device
    this.main = []
    for (let i = 0; i < devices.length; i++) {
      for (let j = 0; j < statuses.length; j++) {
        if (devices[i].id === statuses[j].deviceId) {
          this.main.push({
            id: devices[i].id,
            name: devices[i].name,
            active: statuses[j].active,
            thumbnail: statuses[j].thumbnail,
          })
        }
      }

    }

    //make sure that array is in alphabetical order
    this.main.sort(function(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      }
      return 0
    })

    //initial state
    this.state = {
      sort: "name",
      search: "",
      cameras: this.main,
    }

  }

  //handle text input
  handleChangeText(event) {
    this.setState({ search: event.target.value })
  }

  //handle select input
  handleChangeSelect(event) {
    this.setState({ sort: event.target.value })
  }

  renderFilter() {
    return <div>
      <Heading>
        <h1>Your Cameras</h1>
        <p>Total ({this.state.cameras.length})</p>
      </Heading>
      <SearchArea>
        <div>
          <Search className="search" placeholder="Search by name or Id" type="text" name="search"
                  value={this.state.search}
                  onChange={this.handleChangeText}/>
        </div>
        <FilterDiv>
          <Filter className="select" data-icon="../assets/icons/shape.png" defaultValue={this.state.sort}
                  onChange={this.handleChangeSelect}>
            <option value="name">Sort by name</option>
            <option value="active">Sort by status</option>
          </Filter>
        </FilterDiv>
      </SearchArea>
    </div>
  }

  render() {
    if (this.state.sort === "name") {
      return <Container>
        {this.renderFilter()}
        <Label label="All Devices" count={this.state.cameras.length}/>
        <Grid>
          {
            this.state.cameras.filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase()) || x.id === this.state.search).map((device, index) => (
              <div key={index}>
                <Card device={device}/>
              </div>
            ))
          }
        </Grid>
      </Container>
    } else {
      return <div>
        <Container>
          {this.renderFilter()}
          <Label label="Active Devices" count={this.state.cameras.filter(x => x.active).length}/>
          <Grid>
            {
              this.state.cameras.filter(x => (x.name.toLowerCase().includes(this.state.search.toLowerCase()) || x.id === this.state.search) && x.active).map((device, index) => (
                <div key={index}>
                  <Card device={device} search={this.state.search}/>
                </div>
              ))
            }
          </Grid>
        </Container>
        <Container>
          <Label label="Inactive Devices" count={this.state.cameras.filter(x => !x.active).length}/>
          <Grid>
            {
              this.state.cameras.filter(x => (x.name.toLowerCase().includes(this.state.search.toLowerCase()) || x.id === this.state.search) && !x.active).map((device, index) => (
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
