import React, {Component} from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userName: '',
    };
  }
  
  setUserName = e => {
    const userName = e.target.value;  
    this.setState({ userName });  
  }

  removeId = userName => {
    return userName.split('#')[0];
  }


  fetchData = () => {   
    this.props.fetchData(this.state.userName);
    this.props.setUserName(this.removeId(this.state.userName));
    this.props.setLoading();
  }

  onEnter = e => { 
    if (e.keyCode === 13) {
      this.fetchData()
    }
  }

  render () {
    return (
      <div className="searchbar__container">
        <input className="searchbar__input username" type="text" placeholder="Username#Battletag - (case sensitive)" onKeyDown={this.onEnter} onChange={this.setUserName}/>
        <div className="searchbar__search" onClick={this.fetchData}>SEARCH</div>
      </div>
    )
  }
}

export default Searchbar