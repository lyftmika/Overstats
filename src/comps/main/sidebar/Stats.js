import React, {Component} from 'react';

class Stats extends Component {
  
  render () {
    let { userName, data } = this.props;
    let stats = {};
    let rank = '';
    if ( data.stats ) {
      data.stats.competitive 
        ? stats = data.stats.competitive.overall_stats 
        : stats = data.stats.quickplay.overall_stats
      
      data.stats.competitive
        ? rank = data.stats.competitive.overall_stats.comprank
        : rank = 'Not yet ranked'
    }

    return (
      <div className="stats__container">
        <div className="stats__username">{ userName }</div>
        <table className="stats__stats-table">
          <tr>
            <td className="stats__title">Rank:</td>
            <td className="stats__value">{rank}</td>
          </tr>
          <tr>
            <td className="stats__title">Level:</td>
            <td className="stats__value">{stats.level}</td>
          </tr>
          <tr>
            <td className="stats__title">Prestige:</td>
            <td className="stats__value">{stats.prestige}</td>
          </tr>
          <tr>
            <td className="stats__title">Winrate:</td>
            <td className="stats__value">
              {stats.win_rate ? Math.round(stats.win_rate) : ''}{stats.win_rate ? "%" : ""}
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Stats

Stats.defaultProps = {

}