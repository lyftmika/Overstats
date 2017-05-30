import React, {Component} from 'react';
import logo from './logo.png';

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
  avatar: logo
}