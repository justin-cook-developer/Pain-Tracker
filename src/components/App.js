import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderSmart from './header/HeaderSmart';
import About from './about/About';
import AllRecordsSmart from './allRecords/AllRecordsSmart';
import { getRecords } from '../actions/records';

class App extends React.Component {
  componentDidMount() {
    this.props.loadRecords()
  }

  render() {
    return (
      <React.Fragment>
        <HeaderSmart />
        <main>
          <Switch>
            <Route path='/' exact component={About} />
            <Route path='/records' exact component={AllRecordsSmart} />
          </Switch>
        </main>
      </React.Fragment>
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
