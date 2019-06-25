import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import CameraList from "./components/CameraList"

function App() {
  return (
    <div className="App">
      <Nav/>
      <CameraList/>
    </div>
  );
}

export default App;
