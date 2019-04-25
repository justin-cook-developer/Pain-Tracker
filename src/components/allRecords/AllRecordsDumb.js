import React from 'react';
import { Link, Route } from 'react-router-dom';

import SingleRecord from '../singleRecord/SingleRecordSmart';
import NewRecordForm from '../newRecordForm/NewRecordFormSmart';
import OptionsForm from './options/optionsFormSmart';

const CenterColumn = ({ comp }) => (
  <div className="columns is-centered">
    <div className="column is-half">
      {comp}
    </div>
  </div>
)

const AllRecordsDumb = ({ records }) => {
  return (
    <React.Fragment>
      <section className="section">
        <h1 className="title has-text-centered is-large">Records</h1>
        <div className="content has-text-centered">
          <Link to="/records/new" className="button is-small is-success">
            New Record
          </Link>
        </div>
        <CenterColumn comp={<Route path="/records/new" exact component={NewRecordForm} />} />
        <CenterColumn comp={<OptionsForm />} />
        <CenterColumn comp={records.map(record => <SingleRecord key={record.id} record={record} />)} />
      </section>
    </React.Fragment>
  );
};

export default AllRecordsDumb;
