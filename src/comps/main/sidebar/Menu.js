import React, {Component} from 'react'

class Menu extends Component {
  render () {
    return (
      <div className="menu__container">
        <div className="menu__title">
          Menu
        </div>
        <div className="menu__item">Competitive</div>
        <div className="menu__item">Casual Play</div>
        <div className="menu__item">Achievements</div>
      </div>
    )
  }
}

export default Menu