import React from 'react';
import { Link } from 'react-router-dom'

const SingleRecord = ({ handleClick, record }) => {
  const { date, title, id } = record
  const parsedDate = new Date(date)

  const boxStyles = { marginBottom: 5 }

    return (
      <div className='box' style={boxStyles}>
        <div className='level is-mobile'>
          <div className='level-left'>
            <p className='level-item'>{`${parsedDate.getMonth()} / ${parsedDate.getDay()} / ${parsedDate.getFullYear()}`}</p>
          </div>
          <div className='level-right'>
            <div className='level-item'>
              <button className='button is-danger' type="delete" onClick={e => {
                e.stopPropagation()
                handleClick()
              }}>Delete</button>
            </div>
          </div>
        </div>
        <Link to={`/records/${id}`} className='is-link'>
          <h1 className='subtitle has-text-centered'>{title}</h1>
        </Link>
      </div>
  )
}

export default SingleRecord
