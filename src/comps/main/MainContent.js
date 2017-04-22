import React, {Component} from 'react'
import CardRow from './CardRow';
import Empty from './Empty';


class MainContent extends Component {

  renderCards() {
    const { data : { stats : competitive } } = this.props;
    const cards1 = [
      {title: 'StreetFighter', subtitle: 'melee final blows', value: competitive.game_stats.melee_final_blows },
      {title: 'U are on fire', subtitle: 'time spent on fire', value: 200 },
      {title: 'Stay on the point', subtitle: 'time spent on the point', value: 200 },
    ];
    
    const cards2 = [
      {title: 'Time Wasted', subtitle: 'total time played', value: 200 },
      {title: 'Card collector', subtitle: 'total cards collected', value: 200 },
      {title: 'Olympic gamer', subtitle: 'total medals collected', value: 200 },
    ];

    const cards3 = [
      {title: 'Tie-maker', subtitle: 'total draw games', value: 200 },
      {title: 'Multikill', subtitle: 'highest multikill', value: 200 },
      {title: 'Greenpeace', subtitle: 'total enviromental kills', value: 200 },
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
    return (
      <div className="content__container">
        <div className="content__header">
          STATISTICS
        </div>
        {this.renderCards()}
      </div>
    )
  }
}

export default MainContent

MainContent.defaultProps = {
  data: {}
}