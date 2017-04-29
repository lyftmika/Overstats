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
      error: false,
      userName: '',
      userName2: '',
    }
  }

  getUrl = () => {
    
  }
  
  fetchData = url => {
    return fetch(this.getUrl()).then( data => {
      if (data === 'error') {
        this.setState({
          error:true,
          userName2: ''
        });
        this.filterOnRegion({});
        return false;
      }

      this.setState({
        error: false,
        userName2: this.state.userName, // SO UGLY FIX THIS PLEASE!
      });
      this.filterOnRegion(data);
    });
  }

  filterOnRegion = (data = {}) => {
    //Check what region has data
    const filteredData = _.pickBy(data.data, _.isObject);
    const region = Object.keys(filteredData)[0];
    this.setState({data : filteredData[region]});
  }


  setUserName = userName => {
    this.setState({userName});
  }

  renderContent() {
    const { data, userName2, error } = this.state;

    return (
      <div>
        <Header 
          data={data} 
          fetchData={this.fetchData}
          setUserName={this.setUserName}
        />
        <Main 
          data={data}
          userName={userName2}
          error={error}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="overstats__container">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
