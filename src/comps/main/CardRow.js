import React, { Component } from 'react'
import Card from './Card';

class CardRow extends Component {
  render () {
    const { cards } = this.props;
    return (
      <div className="cardrow">
        {cards.map((card,index)=> <Card key={index} card={card }/>)}
      </div>
    )
  }
}

export default CardRow