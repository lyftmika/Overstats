import React, {Component} from 'react'

class Avatar extends Component {
  render () {
    const placeholder = 'http://lorempixel.com/128/128/cats';
    return (
      <div className="avatar__container">
        <img className="avatar__image" src={placeholder} />
      </div>
    )
  }
}

export default Avatar