import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';

class App extends Component {
  state = {
    series: []
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
          
        </header>
        <Intro message="Here you can find all of your most TV serires." />
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;