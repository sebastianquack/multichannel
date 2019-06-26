import React, { Component } from 'react';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import Marker from 'react-google-maps/lib/components/Marker';
import Circle from 'react-google-maps/lib/components/Circle';

import styled from 'styled-components'

/* Create map with withGoogleMap HOC */
/* https://github.com/tomchentw/react-google-maps */

/* Default configuration */
const DEFAULT_ZOOM = 15;
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};
const DEFAULT_RADIUS = 250;
/* Circle options */
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#CircleOptions
const DEFAULT_CIRCLE_OPTIONS = {
  fillColor: 'gray',
  fillOpacity: 0.25,
  strokeColor: 'gray',
  strokeOpacity: 1,
  strokeWeight: 1.5
};

const Map = withGoogleMap((props) => {
  const {
    position,
    userPosition,
    defaultZoom,
    places
  } = props;
  const mapExtraProps = { 
    center: position,
    options: {streetViewControl: false, fullscreenControl: false, mapTypeControl: false}
  };

  const markers = places.map((p, index)=>
    <Marker
      key={index}
      position={{lat: p.lat, lng: p.lon}}
      onClick={()=>{props.openPlace(p)}}
    />
  )

  const circle = 
    <Circle
      center={userPosition}
      radius={DEFAULT_RADIUS}
      options={DEFAULT_CIRCLE_OPTIONS}
    />;
  
  return (
    <GoogleMap
      defaultZoom={defaultZoom}
      defaultCenter={position}
      {...mapExtraProps}
    >
      {markers}
      {props.userPosition && circle}
    </GoogleMap>
  )
});


const PlaceEntry = props => 
  <PlaceLi onClick={props.onClick}>
    {props.place.name}
  </PlaceLi>

class MapPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userPosition: null
    }
  }

  render () {
    const placeEntries = this.props.places ? this.props.places.map((p, index)=>
      <PlaceEntry
        key={index}
        place={p}
        onClick={()=>this.props.openPlace(p)}
      />
    ) : "loading..."

    return <MapContainer visible={this.props.visible}>
      
      <Map
        containerElement={ <div style={ {height: '100%'} } /> }
        mapElement={ <div style={ {height: '400px'} } /> }
        position={this.state.userPosition ? this.state.userPosition : defaultPosition}
        userPosition={this.state.userPosition}
        defaultZoom={DEFAULT_ZOOM}
        places={this.props.places}
        openPlace={this.props.openPlace}
      />

      <ul>{placeEntries}</ul>

      <LocateButton src="/images/locate.png" 
        onClick={()=>{
          
          // Try HTML5 geolocation
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=> {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              console.log("setting userPosition");
              this.setState({userPosition: pos})
            }, ()=> {
              alert("couldn't get location");
            }, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          } else {
            alert("browser doesn't support location");
          }

        }}
      />

    </MapContainer>
  }
}

export default MapPage;

const MapContainer = styled.div`
  display: flex;
  width: 100%; 
  box-sizing: border-box;
  flex-direction: column;
  position: fixed;
  visibility: ${props => props.visible ? "visible" : "hidden"}
`

const PlaceLi = styled.li`
  :hover {cursor: pointer};
`

const LocateButton = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10px;
  top: 220px;
  padding: 5px;
  box-shadow: 2px 2px #ddd;
  border-radius: 2px;
  background-color: white;
  font-weight: bold;
  :hover {cursor: pointer};
`
