import React, {Component} from 'react'
import CardRow from './CardRow';
import Empty from './Empty';


class MainContent extends Component {

  renderCards() {
    const { data, data : { stats : {competitive } } } = this.props;
    const cards1 = [
      {title: 'StreetFighter 👊', subtitle: 'melee final blows', value: competitive.game_stats.melee_final_blows, unit: 'kills' },
      {title: 'U are on fire 🔥', subtitle: 'time spent on fire', value: competitive.game_stats.time_spent_on_fire, unit: 'hours' },
      {title: 'Stay on the point ⬇️', subtitle: 'time spent on the point', value: competitive.game_stats.objective_time, unit: 'hours' },
    ];
    
    const cards2 = [
      {title: 'Time Wasted 🕕', subtitle: 'total time played', value: competitive.game_stats.time_played, unit: 'hours' },
      {title: 'Card collector 🃏', subtitle: 'total cards collected', value: competitive.game_stats.cards, unit: 'cards' },
      {title: 'Olympic gamer 🥉', subtitle: 'total medals collected', value: competitive.game_stats.medals, unit: ' medals' },
    ];

    const cards3 = [
      {title: 'Tie-maker 👔', subtitle: 'total draw games', value: competitive.game_stats.games_tied, unit: 'games' },
      {title: 'Multikill 🎯', subtitle: 'best kill streak', value: competitive.game_stats.kill_streak_best, unit: 'kills' },
      {title: 'Greenpeace ✌️', subtitle: 'total enviromental kills', value: competitive.game_stats.environmental_kills, unit: 'kills' },
    ];

    if(!data.stats) {
      return <Empty />
    } 

    return (
      <div className="cardrow__container">
        <CardRow data={data} cards={cards1} />
        <CardRow data={data} cards={cards2} />
        <CardRow data={data} cards={cards3} />
      </div>
    );
  }

  render () {
    const { data } = this.props;
    return (
      <div className="content__container">
        <div className="content__header">
          Statistics
        </div>
        { data.stats ? this.renderCards() : <Empty />}
      </div>
    )
  }
}

export default MainContent

MainContent.defaultProps = {
  data: {}
}