import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Petinder</h1>
        </header>
        <p>Esto es una aplicacion de prueba</p>
      </div>
    );
  }
}

export default App;
