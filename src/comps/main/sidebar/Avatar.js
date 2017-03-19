import React, {Component} from 'react'

class Avatar extends Component {
  render () {
    const { avatar } = this.props;
   
    return (
      <div className="avatar__container">
        <img className="avatar__image" alt="User Avatar" src={avatar} />
      </div>
    )
  }
}

export default Avatar

Avatar.defaultProps = {
  avatar: 'http://lorempixel.com/128/128/cats'
}