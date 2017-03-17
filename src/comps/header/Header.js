import React, {Component} from 'react';
import Logo from './Logo';
import Search from './Searchbar';

class Header extends Component {
  render () {
    const { fetchData, setUserName } = this.props;
    return (
      <div className="header__container">
        <Logo />
        <Search fetchData={fetchData} setUserName={setUserName}/>
      </div>
    )
  }
}

export default Header