import React, { Component } from 'react';
import logo from './logo.svg';
import background from './cover-img.jpg';

import './App.css';
import ArtContainer from './containers/ArtContainer'
require('dotenv').config()

class App extends Component {

  render() {
    return (
      <div className="App">
        <ArtContainer />
      </div>
    );
  }
}

export default App;
