import React, { Component } from 'react';

import MapPage from './MapPage.js'
import PlacePage from './PlacePage.js'
import Menu from './Menu.js'

import axios from 'axios';
import { apiUrl } from '../helpers'

import styled from 'styled-components'

class BaseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      currentPlace: null,
      menuOpen: false,
      translations: [],
      locale: "en",
    }
  }

  async componentDidMount() {
    let response = await axios.get(apiUrl + "/place");
    this.setState({places: response.data.docs});

    response = await axios.get(apiUrl + "/translation");
    this.setState({translations: response.data.docs});
  }

  setLocale = (l)=> {
    this.setState({locale: l})
  }

  render() {
    return (
      <div>
        {!this.state.menuOpen && !this.state.currentPlace &&
          <MenuButton src="/images/menu.png" onClick={()=>{
            this.setState({menuOpen: true});
          }}
          />
        }

        {this.state.menuOpen && 
          <Menu 
            close={()=>{ this.setState({menuOpen: false}); }}
            translations={this.state.translations}
            locale={this.state.locale}
            setLocale={this.setLocale}
          />
        }

        <MapPage
          visible={!this.state.currentPlace} 
          places={this.state.places}
          openPlace={(p)=>{this.setState({currentPlace: p})}}
          locale={this.state.locale}
        />
        {this.state.currentPlace && 
          <PlacePage 
            place={this.state.currentPlace}
            exitPlace={()=>{this.setState({currentPlace: null})}}
            locale={this.state.locale}
          />
        }
      </div>
    );
  }
}

export default BaseContainer;

const MenuButton = styled.img`
  position: absolute;
  z-index: 100;
  width: 30px;
  height: 30px;
  left: 10px;
  top: 10px;
  :hover {cursor: pointer}; 
`
