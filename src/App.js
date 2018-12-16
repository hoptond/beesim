import React, { Component } from 'react';
import './App.css';
import Gamescreen from './Classes/Gamescreen.js';
import UiPanel from './Classes/UiPanel.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Gamescreen>
          <UiPanel />
        </Gamescreen>
      </div>
    );
  }
}

export default App;
