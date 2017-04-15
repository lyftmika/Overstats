import React, {Component} from 'react';
import UserStats from './sidebar/UserStats';
import Menu from './sidebar/Menu';
import Error from './Error';
import MainContent from './MainContent';

class Main extends Component {
  
  renderContent(){
    const { error, data } = this.props;
    return error ? <Error /> : <MainContent data={data} />
  }
  
  render () {
    const { data, userName, error } = this.props;
    return (
      <div className="main__container">
        <div className="sidebar__container">
          <UserStats
            data={ data }
            userName={ userName }
            error={ error }
          />
          <Menu />
        </div>
        
        {this.renderContent()}
      </div>
    )
  }
}

export default Main