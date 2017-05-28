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
          <Link to="/competitive">
            <i className='ion-trophy blue'></i> Competitive
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/quickplay">
            <i className='ion-ios-game-controller-b green'></i> Quickplay
          </Link>
        </div>
        <div className="menu__item">
          <Link to="/achievements">
            <i className='ion-star orange'></i>Achievements
          </Link>
        </div>
      </div>
    )
  }
}

export default Menu