import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';
import LeaderBoard from './LeaderBoard';
import Rewards from './Rewards';
import MakePayment from './MakePayment';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/LeaderBoard" component={LeaderBoard} />
          <Route path="/Rewards" component={Rewards} />
          <Route path="/makePayment" component={MakePayment} />
          <Route path="/Resources" component={Resources} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
