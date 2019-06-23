import React, { Component } from 'react';
import styled from 'styled-components'

class PlacePage extends Component {
  render () {
    return <div>
      <PlacePageContainer>place page: {this.props.place.name}</PlacePageContainer>
      <ExitButton onClick={this.props.exitPlace}>leave</ExitButton>
    </div>
  }
}

export default PlacePage;

const ExitButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  :hover {cursor: pointer};
`

const PlacePageContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px;
`