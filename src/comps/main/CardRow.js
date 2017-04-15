import React, { Component } from 'react'
import Card from './Card';

class CardRow extends Component {
  render () {
    const { data, cards } = this.props;
    return (
      <div className="cardrow">
        {cards.map((card)=> <Card card={card }/>)}
      </div>
    )
  }
}

export default CardRow