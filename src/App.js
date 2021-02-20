import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PlanetsDisplay from './PlanetsDisplay.js';
import HomePage from './HomePage.js';

//note

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/planets"
              exact
              render={(routerProps) => <PlanetsDisplay {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
