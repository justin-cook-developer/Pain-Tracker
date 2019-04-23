import React from 'react';
import { Link } from 'react-router-dom';

import { displayDate } from '../../../utilities/index';

const RecordDumb = ({ record, handleClick }) => {
  const { title, painLevel, notes, date, id } = record;
  const parsedDate = new Date(date);
  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <p className="level-item">{displayDate(parsedDate)}</p>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="field is-grouped">
                <div className="control">
                  <Link
                    to={`/records/single/${id}/edit`}
                    className="button is-info"
                  >
                    Edit Record
                  </Link>
                </div>
                <div className="control">
                  <button
                    type="button"
                    className="button is-danger"
                    onClick={handleClick}
                  >
                    Delete Record
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="title has-text-centered content">{title}</h1>
        <h2 className="has-text-centered content">Pain level: {painLevel}</h2>
        <p className="content has-text-centered">{notes}</p>
      </div>
    </section>
  );
};

export default RecordDumb;
