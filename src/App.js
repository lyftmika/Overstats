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
      show: false,
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

  renderStart = () => {
    return (
      <div>LATEN WE ZO BEGINNEN!!</div>
    )
  }

  renderShow = () => {
    const { data } = this.state;
    return (
      <div>
        <Header 
          data={data} 
          setUrl={this.setUrl} 
          fetchData={this.fetchData}
        />
        <Main data={data}/>
      </div>
    );
  }

  renderContent = () => {
    const { show } = this.state;
    return show ? this.renderShow() : this.renderStart();
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
