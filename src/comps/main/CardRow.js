import React, { Component } from 'react'
import Card from './Card';

class CardRow extends Component {
  render () {
    return (
      <div>
        CARD ROW
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default CardRow