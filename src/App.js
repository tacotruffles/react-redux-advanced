import React, { Component } from 'react';

import Persons from './containers/Persons';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p style={{textAlign: 'center'}}>A more advanced example of using local component state (for UI) and passing into Redux to manage a global state</p>
        <Persons />
      </div>
    );
  }
}

export default App;
