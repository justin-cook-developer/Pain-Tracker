import React from 'react';
import { Link } from 'react-router-dom';

const ChangePage = ({ pageNumber, numberRecords, count }) => {
  const previousPage = pageNumber > 1 ? pageNumber - 1 : 1
  const lastPageNumber = Math.ceil(count / 14)
  const nextPage = pageNumber >= Math.ceil(count / 14) ? pageNumber : pageNumber + 1
  return (
    <div className='level'>
      <div className='level-left'>
        <Link className='button level-item' disabled={pageNumber <= 1} to={`/records/1`}>First Page</Link>
        <Link className='button level-item' disabled={pageNumber <= 1} to={`/records/${previousPage}`}>Previous Page</Link>
      </div>
      <div className='level-right'>
        <Link className='button level-item' disabled={pageNumber >= lastPageNumber} to={`/records/${nextPage}`}>Next Page</Link>
        <Link className='button level-item' disabled={pageNumber >= lastPageNumber} to={`/records/${lastPageNumber}`}>Last Page</Link>
      </div>
    </div>
  )
}

export default ChangePage
