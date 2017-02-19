import React, {Component} from 'react';
import Logo from './Logo';
import Search from './Searchbar';

class Header extends Component {
  render () {
    return (
      <div className="header__container">
        <Logo />
        <Search />
      </div>
    )
  }
}

export default Header