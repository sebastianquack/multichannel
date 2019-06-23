import React, { Component } from 'react';

import MapPage from './MapPage.js'
import PlacePage from './PlacePage.js'


import axios from 'axios';

class BaseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      currentPlace: null
    }
  }

  async componentDidMount() {
    let response = await axios.get("place");
    this.setState({places: response.data.docs});
  }

  render() {
    return (
      <div>
        <MapPage
          visible={!this.state.currentPlace} 
          places={this.state.places}
          openPlace={(p)=>{this.setState({currentPlace: p})}}
        />
        {this.state.currentPlace && 
          <PlacePage 
            place={this.state.currentPlace}
            exitPlace={()=>{this.setState({currentPlace: null})}}
          />
        }
      </div>
    );
  }
}

export default BaseContainer;
