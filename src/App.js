import React from 'react';
import logo from './logo.svg';
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
