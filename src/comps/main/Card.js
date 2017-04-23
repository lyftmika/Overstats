import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';


class Card extends Component {

round = (value, precision) => {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

  render () {
    const { card: {title, subtitle, value, unit} } = this.props;
    console.log(`${title} - ${value}`);
    
    return (
      <div className="card">
        <div className='card__title'>{title}</div>
        <div className='card__subtitle'>{subtitle}</div>
        <div className='card__value-container'>
          <div className="card__value">
          <AnimatedNumber 
            value={this.round(value, 2) || 0}
            component="text"
            duration={1000}
            stepPrecision={0}
          />
          </div>
          <div className='card__unit'>{unit}</div>
        </div>
        
      </div>
    )
  }
}

export default Card