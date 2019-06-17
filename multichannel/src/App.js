import React from 'react';
import './App.css';

import ReactAudioPlayer from 'react-audio-player';

const audioFiles = [
      "audio/1_1-16_cello_00.00.00.00.mp3",
      "audio/1_1-16_viola_00.00.00.00.mp3",
      "audio/1_1-16_violin1_00.00.00.00.mp3"
];

class MultiChannelAudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channelsOn: props.files.map(()=>true)
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);

    this.audioPlayerRefs = props.files.map(()=>null);
    this.players = this.props.files.map((file, index)=>
      <ReactAudioPlayer
          key={index}
          src={file}
          ref={(element)=>this.audioPlayerRefs[index]=element}
        />
    );
  }

  handlePlay() {
    this.audioPlayerRefs.forEach((player)=>{
      if(player) {
        player.audioEl.play();  
      }
    });
  }

  handlePause() {
    this.audioPlayerRefs.forEach((player)=>{
      if(player) {
        player.audioEl.pause();  
      }
    });
  }

  handleRewind() {
    this.audioPlayerRefs.forEach((player)=>{
      if(player) {
        player.audioEl.pause();  
        player.audioEl.currentTime = 0;  
      }
    });
  }

  handleCheckbox(index) {
    let channelsOn = this.state.channelsOn;
    channelsOn[index] = !channelsOn[index];
    this.setState({channelsOn: channelsOn});
    this.audioPlayerRefs[index].audioEl.volume = channelsOn[index] ? 1.0 : 0.0;
  }

  render() {

    const channelSelect = this.props.files.map((file, index)=>
      <div key={index}>
        <label>{file}</label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.channelsOn[index]}
          onChange={()=>this.handleCheckbox(index)} 
        />
      </div>
    );

    return (
      <div>
        {this.players}
        {channelSelect}
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
        <button onClick={this.handleRewind}>Rewind</button>
      </div>
    );
  }

}

function App() {
  return (
      <MultiChannelAudioPlayer files={audioFiles}/>
  );
}

export default App;
