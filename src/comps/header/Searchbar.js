import React, {Component} from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      id: '',
      userName: '',
      fullUserName: '',
    };
  }
  
  onEnter = e => { 
    if (e.keyCode === 13) {
      console.log('lol');
      
      this.fetchData()
    }
  }
  setUserName = e => {
    const fullUserName = e.target.value;
    this.setState({ fullUserName });
  }

  getUserName(){
    const str = this.state.fullUserName;
    return str.split('#');
  }

  getUrl() {
    const [userName, id] = this.getUserName();
    return `https://owapi.net/api/v3/u/${userName}-${id}/blob`;
  }

  fetchData = () => {   
    this.props.fetchData(this.getUrl());
  }

  render () {
    return (
      <div className="searchbar__container">
        <input className="searchbar__input username" type="text" placeholder="Username" onKeyDown={this.onEnter} onChange={this.setUserName}/>
        <div className="searchbar__search" onClick={this.fetchData}>SEARCH</div>
      </div>
    )
  }
}

export default Searchbar