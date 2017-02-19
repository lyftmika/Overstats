import React, {Component} from 'react';
import UserStats from './sidebar/UserStats';
import Menu from './sidebar/Menu';
import MainContent from './MainContent';

class Main extends Component {
  render () {
    return (
      <div className="main__container">
        <div className="sidebar__container">
          <UserStats/>
          <Menu />
        </div>

        <div className="content__container">
          <MainContent />
        </div>
      </div>
    )
  }
}

export default Main