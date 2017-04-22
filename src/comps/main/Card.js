import React, { Component } from 'react'

class Card extends Component {
  render () {
    const { data, card: {title, subtitle, value} } = this.props;
    return (
      <div className="card">
        <div className='card__title'>{title}</div>
        <div className='card__subtitle'>{subtitle}</div>
        <div className='card__value'>{value}</div>
        
      </div>
    )
  }
}

export default Card