import React, { Component } from 'react';

import styled from 'styled-components'

const PlaceMarker = props => 
  <Marker onClick={props.onClick}>
    {props.place.name}
  </Marker>

class MapPage extends Component {
  render () {
    const places = this.props.places ? this.props.places.map((p, index)=>
      <PlaceMarker
        key={index}
        place={p}
        onClick={()=>this.props.openPlace(p)}
      />
    ) : "loading..."

    return <MapContainer visible={this.props.visible}>
      <ul>
        {places}
      </ul>
    </MapContainer>
  }
}

export default MapPage;

const MapContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%; 
  box-sizing: border-box;
  flex-direction: column;
  position: fixed;
  background-color: gray;
  visibility: ${props => props.visible ? "visible" : "hidden"}
`

const Marker = styled.li`
  :hover {cursor: pointer};
`