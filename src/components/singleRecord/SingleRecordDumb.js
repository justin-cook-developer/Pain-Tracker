import React from 'react';

const SingleRecord = ({ handleClick, record }) => {
  const { date, title, id } = record
  return (
    <Link to={`/records/${id}`}>
      <div className='box'>
        <div className='level'>
          <div className='level-left'>
            <p className='level-item'>{date}</p>
          </div>
          <div className='level-right'>
            <button className='delete' type="delete" onClick={(e) => handleClick({id})}></button>
          </div>
        </div>
        <h1 className='subtitle'>{title}</h1>
      </div>
    </Link>
  )
}

export default SingleRecord
