import React, { Component } from 'react';
import './App.css';
import Gamescreen from './Classes/Gamescreen.js';
import UiPanel from './Classes/UiPanel.js';
import UiButton from './Classes/UiButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gamescreen>
          <UiPanel>
            <div class="button-row">
              <UiButton />
              <UiButton />
              <UiButton />
              <UiButton />
            </div>
          </UiPanel>
        </Gamescreen>
      </div>
    );
  }
}

export default App;
