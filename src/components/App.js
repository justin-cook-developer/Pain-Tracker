import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HeaderSmart from './header/HeaderSmart';
import About from './about/About';
import AllRecordsSmart from './allRecords/AllRecordsSmart';
import Record from './record/Record';
import EditSingleRecordForm from './editSingleRecord/EditSingleRecordSmart';
import { getRecords } from '../actions/records';

class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderSmart />
        <main>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/records/single/:id" exact component={Record} />
            <Route
              path="/records/single/:id/edit"
              exact
              component={EditSingleRecordForm}
            />
            <Route path="/records" component={AllRecordsSmart} />
          </Switch>
        </main>
      </Router>
    );
  }
}


export default hot(
  App
);
