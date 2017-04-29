import React, {Component} from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userName: '',
      fullUserName: '',
    };
  }
  
  setUserName = e => {
    const fullUserName = e.target.value;  
    this.setState({ fullUserName });  
  }

  getUserName(){
    const str = this.state.fullUserName;
    return str.split('#');
  }


  fetchData = () => {   
    this.props.fetchData();
    this.props.setUserName(this.state.fullUserName.split('#')[0])
  }

  onEnter = e => { 
    if (e.keyCode === 13) {
      this.fetchData()
    }
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