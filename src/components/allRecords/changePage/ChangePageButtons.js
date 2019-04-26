import React from 'react';
import { Link } from 'react-router-dom';

const ChangePage = ({ pageNumber, numberRecords }) => {
  return (
    <div className='level is-mobile'>
      <div className='level-left'>
        <Link className='button level-item' disabled={pageNumber <= 1} to={`/records/1`}>First Page</Link>
        <Link className='button level-item' disabled={pageNumber <= 1} to={`/records/${pageNumber !== 1 ?pageNumber - 1 : 1}`}>Previous Page</Link>
      </div>
      <div className='level-right'>
        <Link className='button level-item' disabled={numberRecords < 12} to={`/records/${pageNumber + 1}`}>Next Page</Link>
      </div>
    </div>
  )
}

export default ChangePage
