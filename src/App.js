import React, { Component } from 'react';
import './App.css';
import Main from './comps/main/Main';
import Header from './comps/header/Header';
import _ from 'lodash';

import { fetch } from './utils/request';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      userName: 'LyftMika',
    }
  }
  
  fetchData = url => {
    return fetch(url).then( data => {
      console.log(data);
      if (data === 'error') {
        console.log('Houston we have a problem');
      }
      this.filterOnRegion(data);
    });
  }

  filterOnRegion = (data = {}) => {
    //Check what region has data
    const filteredData = _.pickBy(data.data, _.isObject);
    console.log(filteredData);
    const region = Object.keys(filteredData)[1];
    this.setState({data : filteredData[region]});
  }

  renderShow() {
    const { data, userName } = this.state;
    return (
      <div>
        <Header 
          data={data} 
          fetchData={this.fetchData}
          setUserName={this.setUserName}
        />
        <Main 
          data={data}
          userName={userName}
        />
      </div>
    );
  }

  setUserName = userName => {
    this.setState({userName});
  }

  leaveStart = () => {
    this.setState({start: false})
  }

  render() {
    return (
      <div className="overstats-container">
        {this.renderShow()}
      </div>
    );
  }
}

export default App;
