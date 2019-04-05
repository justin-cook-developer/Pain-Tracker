import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
import About from './about/About';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={About} />
    </Switch>
  </Router>
)

export default App
