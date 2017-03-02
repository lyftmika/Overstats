import React, { Component } from 'react';
import './App.css';
import Main from './comps/main/Main';
import Header from './comps/header/Header';

import { fetch } from './utils/request';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }
  
  fetchData = url => {
    return fetch(url).then( data => {
      this.setData(data);
    });
  }

  setData = data => {
    this.setState({data: data.data}, console.log('NEW DATA BITCHES'));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="overstats-container">
        <Header 
          data={data} 
          setUrl={this.setUrl} 
          fetchData={this.fetchData}
        />

        <Main data={data}/>
      </div>
    );
  }
}

export default App;
