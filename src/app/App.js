import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../modules/Home';
import PageExample from '../modules/Example';
import { AppRoot } from './App.styled';

export class App extends Component {
  render() {
    return (
      <Router>
        <AppRoot>
          <Route
            component={Home}
            exact
            path='/'
          />
          <Route
            component={PageExample}
            path='/page-example'
          />
        </AppRoot>
      </Router>
    );
  }
}

export default App;
