import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Overview from './components/overview/Overview';
import Account from './components/account/Account';
import Forum from './components/forum/Forum';
import Nav from './components/nav/Nav';

class App extends Component {
  constructor() {
    super();

    this.state= {

    }
  }
  render() {
    return (
      <div className="App">
            <Nav />
            
        <HashRouter>
          {/* <div className="Navbar"> */}
          {/* </div> */}
            <Switch>
              <Route path='/' component={Overview} exact/>
              <Route path='/account' component={Account}/>
              <Route path='/forum' component={Forum}/>
            </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
