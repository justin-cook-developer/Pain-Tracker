import React from 'react';
import { Link, Route } from 'react-router-dom';

import SingleRecord from '../SingleRecord/SingleRecordSmart';
import Form from '../form/Form';

const AllRecordsDumb = ({ records }) => {
  return (
    <React.Fragment>
      <section className='section'>
        <h1 className='title has-text-centered is-large'>Records</h1>
        <div className='content has-text-centered'>
          <Link to="/records/new" className='button is-small is-success'>New Record</Link>
        </div>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <Route path='/records/new' exact component={Form} />
          </div>
        </div>
        <div className='columns is-centered'>
          <div className='column is-half'>
            {records.map(record => <SingleRecord key={record.id} record={record} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}


export default AllRecordsDumb
