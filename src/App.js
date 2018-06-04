import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p style={{textAlign: 'center'}}>An example of using Redux to store and preserve an immutable global state</p>
        <Persons />
      </div>
    );
  }
}

export default App;
