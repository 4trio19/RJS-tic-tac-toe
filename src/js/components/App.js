import React, { Component } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';
import '../.././css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard />
      </div>
    );
  }
}

export default App;
