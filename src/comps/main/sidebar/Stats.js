import React, {Component} from 'react';

class Stats extends Component {
  
  render () {
    let { userName, data } = this.props;
    let stats = {};
    if ( data.stats ) {
      stats = data.stats.competitive.overall_stats;
    }

    return (
      <div className="stats__container">
        <div className="stats__username">{ userName }</div>
        <table className="stats__stats-table">
          <tr>
            <td className="stats__title">Rank:</td>
            <td className="stats__value">{stats.comprank}</td>
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