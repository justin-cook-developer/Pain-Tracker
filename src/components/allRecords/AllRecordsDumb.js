import React from 'react';

import SingleRecord from '../SingleRecord/SingleRecordSmart';

const AllRecordsDumb = ({ records }) => {
  return (
    <section className='section'>
      <h1 className='title has-text-centered'>Records</h1>
      <div className='columns is-centered'>
        <div className='column is-half'>
          {records.map(record => <SingleRecord key={record.id} record={record} />)}
        </div>
      </div>
    </section>
  )
}


export default AllRecordsDumb
