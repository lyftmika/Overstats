import React, {Component} from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }
  
  setUrl = e => {
    let userName = e.target.value;
    if(userName.length < 1) { userName = 'Lyftmika' } // TESTING PURPOSES ONLY
    this.setState({
      url: `https://owapi.net/api/v3/u/${userName}-2865/blob`
    });
    this.setUserName(userName);
  }

  setUserName = userName => {
    this.props.setUserName()
  }


  fetchData = () => {
    this.props.fetchData(this.state.url);
  }

  render () {
    return (
      <div className="searchbar__container">
        <input className="searchbar__input" type="text" placeholder="Enter your full battletag" onChange={this.setUrl}/>
        <div className="searchbar__search" onClick={this.fetchData}>SEARCH</div>
      </div>
    )
  }
}

export default Searchbar