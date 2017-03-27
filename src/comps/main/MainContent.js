import React, {Component} from 'react'
import CardRow from './CardRow';
import Empty from './Empty';


class MainContent extends Component {

  renderCards() {
    const { data } = this.props;
    console.log(data);
    const cards1 = [
      {title: 'StreetFighter', }
    ];

    if(!data.stats) {
      return <Empty />
    } 

    return (
      <div>
        <CardRow cards={cards1} />
      </div>
    );
  }

  render () {
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  }
}

export default MainContent

MainContent.defaultProps = {
  data: {}
}