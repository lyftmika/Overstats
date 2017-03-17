import React, { Component } from 'react';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      userName: 'PROGENJI'
    };
  }
  

  setSearchData = e => {
    let userName = e.target.value;
    if(userName.length < 1) { userName = 'Lyftmika' } // TESTING PURPOSES ONLY
    this.setState({
      url: `https://owapi.net/api/v3/u/${userName}-2865/blob`
    });
    this.setUserName(userName);
  }

  setUserName = userName => {
    this.props.setUserName(userName);
  }


  fetchData = () => {
    this.props.fetchData(this.state.url);
    this.props.leaveStart();
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.setSearchData} />
        <div onClick={this.fetchData}> KLIK OP MIJ DAN!</div>
      </div>
    );
  }
}

export default Start;