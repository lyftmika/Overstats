import React, {Component} from 'react'
import CardRow from './CardRow';
import Empty from './Empty';
import Achievements from './Achievements';
import { cards } from '../../utils/cards';

class MainContent extends Component {

  renderCards() {
    const { data, match } = this.props;
    const type = match.params.type;

    if(!data.stats) {
      return <Empty />
    } 

    if(type === 'achievements') {
      return <Achievements />
    }

    return (
      <div className="cardrow__container">
        {cards(data, type).map((cards, index) => {
          return <CardRow key={index} cards={cards} />
        })}
      </div>
    );
  }


  render () {
    const { data, match, ...props } = this.props;

    return (
        <div className="content__container">
          <div className="content__header">
            { data.stats ? `Statistics - ${match.params.type || 'competitive' }` : 'Welcome to overstats'}
          </div>
          { data.stats ? this.renderCards() : <Empty {...props} />}
        </div>
    )
  }
}

export default MainContent

MainContent.defaultProps = {
  data: {}
}