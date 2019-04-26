import React from 'react';
import { Link } from 'react-router-dom';

const ChangePage = ({ pageNumber, numberRecords, changePage }) => {
  return (
    <div className='level is-mobile'>
      <div className='level-left'>
      <button className='button level-item' disabled={pageNumber === 1} onClick={e => {
          if (pageNumber === 1) {
            return
          } else {
            changePage(1)
          }
        }}>First Page</button>
        <button className='button level-item' disabled={pageNumber === 1} onClick={e => {
          if (pageNumber === 1) {
            return
          } else {
            changePage(pageNumber - 1)
          }
        }}>Previous Page</button>
      </div>
      <div className='level-right'>
        <button className='button level-item' disabled={numberRecords < 12} onClick={e => {
          if (numberRecords < 12) {
            return
          } else {
            changePage(pageNumber + 1)
          }
        }}>Next Page</button>
      </div>
    </div>
  )
}

export default ChangePage
