import React from 'react';
import { Link } from 'react-router-dom'

const SingleRecord = ({ handleClick, record }) => {
  const { date, title, id } = record
  const parsedDate = new Date(date)
  console.log(parsedDate)
    return (
    <Link to={`/records/${id}`}>
      <div className='box'>
        <div className='level'>
          <div className='level-left'>
            <p className='level-item'>{`${parsedDate.getMonth()} / ${parsedDate.getDay()} / ${parsedDate.getFullYear()}`}</p>
          </div>
          <div className='level-right' onClick={e => e.stopPropagation()}>
            <button className='button is-danger' type="delete" onClick={e => {
              e.stopPropagation()
              handleClick()
            }}>Delete</button>
          </div>
        </div>
        <h1 className='subtitle has-text-centered'>{title}</h1>
      </div>
    </Link>
  )
}

export default SingleRecord
