import React, { Component } from 'react';
import styled from 'styled-components'

import { MultiChannelAudioPlayer } from './MultiChannelAudioPlayer';

import axios from 'axios';

import { apiUrl } from '../helpers';

class PlacePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playbackControlStatus: "loading", // ready - playing - paused
      activeTracks: [true, false, false],
      loadingStatus: 0,
      tracks: null
    }
 
    this.updatePlaybackControlStatus = this.updatePlaybackControlStatus.bind(this);
    this.toggleTrack = this.toggleTrack.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get(apiUrl + "/place/"+this.props.place._id, {
        params: {
          $embed: JSON.stringify(["audio1", "audio2", "audio3"])
        }
      }  
    );
    console.log(response);
    let tracks = [
      {file: response.data.audio1.url}, 
      {file: response.data.audio2.url}, 
      {file: response.data.audio3.url}
    ];
    console.log(tracks);
    this.setState({
      place: response.data,
      tracks: tracks
    });
  }

  updatePlaybackControlStatus(playbackControlStatus) {
    this.setState({playbackControlStatus})
  }

  toggleTrack(index) {
    let activeTracks = [false, false, false];
    activeTracks[index] = true;
    this.setState({activeTracks});
  }

  render () {
    const trackButtons = this.state.activeTracks.map((value, index)=>{
      return <button onClick={()=>{this.toggleTrack(index)}}>
        Channel {index + 1}: {value ? "on" : "off"}
      </button>
    });

    return <div>
      <PlacePageContainer>

        <h2>{this.state.place ? this.state.place.name : "loading..."}</h2>

        <p>{this.state.place ? this.state.place.description : "loading..."}</p>

        {this.state.tracks && <MultiChannelAudioPlayer 
          playbackControlStatus={this.state.playbackControlStatus}
          updatePlaybackControlStatus={this.updatePlaybackControlStatus}
          updateLoadingStatus={(loadingStatus)=>this.setState({loadingStatus})}
          tracks={this.state.tracks}
          activeTracks={this.state.activeTracks}
          controls
        />}

        {this.state.playbackControlStatus != "loading" && trackButtons}

      </PlacePageContainer>
      <ExitButton onClick={this.props.exitPlace}>❎</ExitButton>

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
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`