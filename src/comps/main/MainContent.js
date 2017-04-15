import React, {Component} from 'react'
import CardRow from './CardRow';
import Empty from './Empty';


class MainContent extends Component {

  renderCards() {
    const { data } = this.props;
    const cards1 = [
      {title: 'StreetFighter', value: 200 },
      {title: 'StreetFighter', value: 200 },
      {title: 'StreetFighter', value: 200 },
    ];

    if(!data.stats) {
      return <Empty />
    } 

    return (
      <div className="cardrow__container">
        <CardRow data={data} cards={cards1} />
        <CardRow data={data} cards={cards1} />
        <CardRow data={data} cards={cards1} />
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