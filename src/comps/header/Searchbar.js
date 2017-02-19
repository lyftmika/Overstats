import React, {Component} from 'react'

class Searchbar extends Component {
  render () {
    return (
      <div className="searchbar__container">
        <input className="searchbar__input" type="text" placeholder="Enter your full battletag"/>
        <div className="searchbar__search">SEARCH</div>
      </div>
    )
  }
}

export default Searchbar