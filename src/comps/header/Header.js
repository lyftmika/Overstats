import React, {Component} from 'react';
import Logo from './Logo';
import Search from './Searchbar';

class Header extends Component {
  render () {
    const {...props} = this.props;
    return (
      <div className="header__container">
        <Logo />
        <Search {...props}/>
      </div>
    )
  }
}

export default Header