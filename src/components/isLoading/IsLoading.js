import React from 'react';

const IsLoading = () => (
  <section className='section'>
    <div className='columns'>
      <div className='column has-text-centered content'>
        <h1>Loading...</h1>
        <progress className="progress is-large is-info" max="100">60%</progress>
      </div>
    </div>
  </section>
)

export default IsLoading
