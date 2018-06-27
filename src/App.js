import React, { Component } from 'react';
import './App.css';
import Main from './comps/main/Main';
import Header from './comps/header/Header';
import pickBy from 'lodash/pickBy';
import isObject from 'lodash/isObject';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import { fetch } from './utils/request';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: false,
      loading: false,
      userName: '',
      userName2: '',
    }
  }

  filterUser = userName => {
    //Check if the user is a PSN or a PC user. PC users have a # in the user id.
    if (userName.includes('#')) {
      const user = userName.split('#')[0];
      const id = userName.split('#')[1];
      return `${user}-${id}`;
    } 
    return userName;
  }

  checkPlatform = userName => {
    let platform = 'psn';

    if (userName.includes('#')) {
      platform = 'pc';
    }
    return `?platform=${platform}`;
  }
  
  fetchData = userName => {
    const userId = this.filterUser(userName);
    const platform = this.checkPlatform(userName);
    const url = `https://owapi.net/api/v3/u/${userId}/blob${platform}`

    this.setState({loading: true});
    return fetch(url).then( data => {
      if (data === 'error') {
        this.setState({
          error:true,
          loading: false,
          userName2: ''
        });
        this.filterOnRegion({});
        return false;
      }

      this.setState({
        loading: false,
        error: false,
        userName2: this.state.userName, // SO UGLY FIX THIS PLEASE!
      });
      this.filterOnRegion(data);
    });
  }

  filterOnRegion = (data = {}) => {
    //Check what region has data
    const filteredData = pickBy(data.data, isObject);
    const region = Object.keys(filteredData)[1];
    this.setState({data : filteredData[region]});
  }


  setUserName = userName => {
    this.setState({userName});
  }

  renderContent() {
    const { data, userName2, error, loading } = this.state;

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
          loading={loading}
        />
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div className="overstats__container">
          {this.renderContent()}
        </div>
      </Router>
    );
  }
}

export default App;
