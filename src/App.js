import React from "react";
import "./App.css";
import DrumMachine from "./container/DrumMachine";

function App() {
  return (
    <div className="App">
      <h1 style = {{paddingTop: '30px', fontWeight: 'bold', textTransform: "uppercase"}}>Drum Machine</h1>
      <div className="main-div">
        <DrumMachine />
      </div>
    </div>
  );
}

export default App;
