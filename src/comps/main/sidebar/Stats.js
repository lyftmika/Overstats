import React, {Component} from 'react'

class Stats extends Component {
  render () {
    return (
      <div className="stats__container">
        <div className="stats__username"></div>
        <table className="stats__stats-table">
          <tr>
            <td className="stats__title">Rank:</td>
            <td className="stats__value"></td>
          </tr>
          <tr>
            <td className="stats__title">Level:</td>
            <td className="stats__value"></td>
          </tr>
          <tr>
            <td className="stats__title">Prestige:</td>
            <td className="stats__value"></td>
          </tr>
          <tr>
            <td className="stats__title">Winrate:</td>
            <td className="stats__value"></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Stats