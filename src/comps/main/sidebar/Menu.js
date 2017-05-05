import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class Menu extends Component {
  render () {
    return (
      <div className="menu__container">
        <div className="menu__title">
          Menu
        </div>
        <div className="menu__item">
          <Link to="/competitive">Competitive</Link>
        </div>
        <div className="menu__item">
          <Link to="/casual">Casual Play</Link>
        </div>
        <div className="menu__item">
          <Link to="/achievements">Achievement</Link>
        </div>
      </div>
    )
  }
}

export default Menu