import React from 'react';
import './App.css';
import Home from "./facemask/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "5px", marginBottom: "35px", marginLeft: "50px", marginRight: "50px", background: "rgba(255, 255, 255)" }}>                     
        <h1>FACE MASK AND SCRUB </h1>         
        <Home />
        </div>
        </div>
    )
  }
}

export default App;