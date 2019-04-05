import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderSmart from './header/HeaderSmart';
import About from './about/About';

const App = () => (
  <Router>
    <HeaderSmart />
    <Switch>
      <Route path='/' exact component={About} />
    </Switch>
  </Router>
)

export default App
