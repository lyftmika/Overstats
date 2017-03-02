import React, {Component} from 'react'
import Avatar from './Avatar';
import Stats from './Stats';

class UserStats extends Component {
  render () {
    const { data }= this.props;
    return (
      <div className="userstats__container">
        <Avatar data={data} />
        <Stats data={data} />
      </div>
    )
  }
}

export default UserStats