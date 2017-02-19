import React, {Component} from 'react'
import Avatar from './Avatar';
import Stats from './Stats';

class UserStats extends Component {
  render () {
    return (
      <div className="userstats__container">
        <Avatar />
        <Stats />
      </div>
    )
  }
}

export default UserStats