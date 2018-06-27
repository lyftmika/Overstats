import React, {Component} from 'react'
import Avatar from './Avatar';
import Stats from './Stats';

class UserStats extends Component {
  render () {
    const { data, userName } = this.props;
    let avatar;
    console.table(data)
    if (data.stats) { avatar = data.stats.quickplay.overall_stats.avatar }

    return (
      <div className="userstats__container">
        <Avatar avatar={avatar} />
        <Stats userName={userName} data={data}  />
      </div>
    )
  }
}

export default UserStats

UserStats.defaultProps = {
  userName: 'Lyftmika',
  data: {
    stats: {
      competitive: {}
    }
  },
}