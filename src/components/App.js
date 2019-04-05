import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderSmart from './header/HeaderSmart';
import About from './about/About';
import AllRecords from './allRecords/AllRecordsDumb';
import { getRecords } from '../actions/records';

class App extends React.Component {
  componentDidMount() {
    this.props.loadRecords()
  }

  render() {
    return (
      <Router>
        <HeaderSmart />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/records' exact component={AllRecords} />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadRecords: () => {
    const action = getRecords()
    dispatch(action)
  }
})

export default connect(null, mapDispatchToProps)(App)
