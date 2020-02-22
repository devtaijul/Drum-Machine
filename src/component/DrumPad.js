import React from "react";

const DrumPad = ({ pad, handleDrumPadClick}) => {
  return (
    <div id={pad.clip} className="drum-pad" onClick={handleDrumPadClick}>
      <audio id={pad.id} className="clip" src={pad.audio} />
      {pad.id}
    </div>
  );
};

export default DrumPad;
