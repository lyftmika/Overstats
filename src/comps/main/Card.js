import React, { Component } from 'react'

class Card extends Component {
  render () {
    const { data, card } = this.props;
    return (
      <div className="card">
        <div className='card__title'>{card.title}</div>
      </div>
    )
  }
}

export default Card