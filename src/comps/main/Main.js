import React, {Component} from 'react';
import UserStats from './sidebar/UserStats';
import Menu from './sidebar/Menu';
import Error from './Error';
import MainContent from './MainContent';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
  
  renderContent = iets => {
    const { error, data } = this.props;
    if (error) {
      return <Error />
    }

    return (
      <Switch>
        <Route path="/:type" render={props => <MainContent data={data} {...props}/> } />
        <Route exact path="/" render={props => <MainContent data={data} {...props}/> } />
        <Route path="/achievements" component={MainContent} data={data} />
      </Switch>    
    )
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
        
        {this.renderContent(data)}
      </div>
    )
  }
}

export default Main