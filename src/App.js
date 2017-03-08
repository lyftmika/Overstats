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
    }
  }
  
  fetchData = url => {
    return fetch(url).then( data => {
      this.sortData(data);
    });
  }

  sortData = (data = {}) => {
    //Check what region has data
    const filteredData = _.pickBy(data.data, _.isObject);
    const region = Object.keys(filteredData)[0];
    this.setState({data : filteredData[region]});
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
