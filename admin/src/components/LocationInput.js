import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NumberInput } from 'react-admin';
import { FormDataConsumer, REDUX_FORM_NAME } from 'react-admin';
import { change } from 'redux-form';

/**
 * REACT LOCATION PICKER
 */

import Map from './GoogleMap';

/* Default configuration */
const DEFAULT_RADIUS = 1000;
const DEFAULT_ZOOM = 10;

/* Circle options */
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#CircleOptions
const DEFAULT_CIRCLE_OPTIONS = {
  fillColor: 'red',
  fillOpacity: 0.2,
  strokeColor: 'red',
  strokeOpacity: 1,
  strokeWeight: 1.2
};

class LocationPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: props.defaultPosition,
      shouldRecenterMap: false
    };

    this.handleMarkerDragEnd = this.handleMarkerDragEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { defaultPosition } = nextProps;
    if (
      JSON.stringify(defaultPosition) !==
      JSON.stringify(this.props.defaultPosition)
    ) {
      this.setState({ position: defaultPosition, shouldRecenterMap: true });
    }
  }

  /**
   * Handle Map marker position change
   * @param { MouseEvent } mouseEvent // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MouseEvent
   */
  handleMarkerDragEnd(mouseEvent) {
    const { onChange } = this.props;
    // Get latitude and longitude
    const lat = mouseEvent.latLng.lat();
    const lng = mouseEvent.latLng.lng();
    const position = { lat, lng };
    this.setState({ position, shouldRecenterMap: false });
    onChange(position);
  }

  render() {
    const {
      zoom,
      radius,
      circleOptions,
      containerElement,
      mapElement
    } = this.props;

    const { position, shouldRecenterMap } = this.state;

    return (
      <Map
        containerElement={containerElement}
        mapElement={mapElement}
        handleMarkerDragEnd={this.handleMarkerDragEnd}
        position={position}
        circleOptions={circleOptions}
        radius={radius}
        defaultZoom={zoom}
        shouldRecenterMap={shouldRecenterMap}
      />
    );
  }
}

LocationPicker.propTypes = {
  containerElement: PropTypes.node.isRequired,
  mapElement: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultPosition: PropTypes.object.isRequired,
  zoom: PropTypes.number,
  radius: PropTypes.number,
  circleOptions: PropTypes.object
};

LocationPicker.defaultProps = {
  zoom: DEFAULT_ZOOM,
  radius: DEFAULT_RADIUS,
  circleOptions: DEFAULT_CIRCLE_OPTIONS
};


/* Default position */
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};

export default class LocationInput extends Component {
  render () {
    return (
      <FormDataConsumer>
      {({ formData, dispatch, ...rest }) => (
        <div>

          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={this.props.record.lat ? {lat: this.props.record.lat, lng: this.props.record.lon} : defaultPosition} 
            onChange={value => {
                dispatch(change(REDUX_FORM_NAME, 'lat', value.lat))
                dispatch(change(REDUX_FORM_NAME, 'lon', value.lng))
            }}
          />

          <NumberInput source="lat" label="latitude"/>&nbsp;
          <NumberInput source="lon" label="longitude"/>
            
        </div>
      )}
      </FormDataConsumer>
    )
  }
}