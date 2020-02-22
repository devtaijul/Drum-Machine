import React, { Component } from "react";
import DrumPad from "../component/DrumPad";
import Display from "../component/Display";

class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drumPads: [
        {
          id: "Q",
          clip: "Heater-1",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          id: "W",
          clip: "Heater-2",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          id: "E",
          clip: "Heater-3",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          id: "A",
          clip: "Heater-4",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
          id: "S",
          clip: "Clap",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
          id: "D",
          clip: "Open-HH",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
          id: "Z",
          clip: "Kick-n'-Hat",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          id: "X",
          clip: "Kick",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          id: "C",
          clip: "Closed-HH",
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
      ],
      playing: "",
      switch: true
    };
  }

  eraseHandler = () => {
    if (this.state.switch) {
      this.setState({
        playing: ""
      });
    }
  };
  switchHandler = () => {
    this.setState({
      switch: !this.state.switch
    });

    this.eraseHandler();
  };

  drumPadClickHandler(currentDrumPad) {
    if (!this.state.switch) return;
    this.setState({
      playing: currentDrumPad
    });
  }

  playAudio = pad => {
    if (!this.state.switch) return;
    const clip = document.getElementById(`${pad.id}`);
    clip.currentTime = 0;
    clip.play();
  };

  render() {
    window.addEventListener("keydown", function(event) {
      
      let upper = event.key.toUpperCase();

      const targetClip = this.document.getElementById(`${upper}`);

      if (targetClip === null) return;
      targetClip.currentTime = 0;
      targetClip.play();
    });
    return (
      <div id="drum-machine">
        <div className="drum-pads">
          {this.state.drumPads.map(pad => (
            <DrumPad
              handleDrumPadClick={() => {
                this.drumPadClickHandler(pad);
                this.playAudio(pad);
              }}
              key={pad.id}
              pad={pad}
            />
          ))}
        </div>
        <div className="controls">
          <div className="switching">
            <div>
              <i
                class={
                  this.state.switch ? "fas fa-toggle-on" : "fas fa-toggle-off"
                }
                onClick={this.switchHandler.bind(this)}
              ></i>
            </div>
            <div className="show-on-off">
              <h1>{this.state.switch ? "ON" : "OFF"}</h1>
            </div>
          </div>
          <div>
            <Display clip={this.state.playing.clip} />
          </div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
