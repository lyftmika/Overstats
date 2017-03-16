import React, { Component } from 'react';
import './App.css';
import Main from './comps/main/Main';
import Header from './comps/header/Header';
import Start from './comps/start/Start';
import _ from 'lodash';

import { fetch } from './utils/request';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      data: {},
    }
  }
  
  fetchData = url => {
    return fetch(url).then( data => {
      this.filterOnRegion(data);
    });
  }

  filterOnRegion = (data = {}) => {
    //Check what region has data
    const filteredData = _.pickBy(data.data, _.isObject);
    const region = Object.keys(filteredData)[0];
    this.setState({data : filteredData[region]});
  }

  renderStart = () => {
    return (
      <Start 
        fetchData={this.fetchData}
        leaveStart={this.leaveStart}
      />
    )
  }

  renderShow = () => {
    const { data } = this.state;
    return (
      <div>
        <Header 
          data={data} 
          fetchData={this.fetchData}
        />
        <Main data={data}/>
      </div>
    );
  }

  renderContent = () => {
    const { start } = this.state;
    return start ? this.renderStart() : this.renderShow();
  }

  leaveStart = () => {
    this.setState({ start: false})
  }

  render() {
    return (
      <div className="overstats-container">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
