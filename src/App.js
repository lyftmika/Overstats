import React, { Component } from 'react';
import './App.css';
import Main from './comps/main/Main';
import Header from './comps/header/Header';

class App extends Component {
  render() {
    return (
      <div className="overstats-container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
