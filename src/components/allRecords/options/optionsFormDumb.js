import React from 'react';

const OptionsForm = ({ handleSorting, sortBy }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="field">
        <label className="label" htmlFor='sorting'>Sort by:</label>
        <div className="control">
          <div className="select">
            <select id='sorting' name='sorting' value={sortBy} onChange={handleSorting}>
              <option value='Date: Most Recent'>Date: Most Recent</option>
              <option value='Date: Oldest'>Date: Oldest</option>
              <option value='Pain Level: Highest'>Pain Level: Highest</option>
              <option value='Pain Level: Lowest'>Pain Level: Lowest</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  )
}

export default OptionsForm
