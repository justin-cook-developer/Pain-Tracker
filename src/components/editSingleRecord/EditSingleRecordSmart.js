import React from 'react';
import { connect } from 'react-redux';

import { updateRecord, getRecord } from '../../actions/records';
import Form from '../form/Form';
import LoadSingleRecord from '../loadASingleRecord/LoadSingleRecord';
import IsLoading from '../isLoading/IsLoading';

const makeValidDate = str => {
  const [year, month, other] = str.split('-');
  const day = other.slice(0, 2);
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

const EditRecordForm = ({ onSubmit, record, destination }) => {
  if (!record || record.date === undefined) {
    return <IsLoading />
  } else {
    const { date } = record;
    const newDate = makeValidDate(date);
    const updatedRecord = { ...record, date: newDate };
    return (
      <section className='section'>
        <div className="columns is-centered">
          <div className="column is-half">
            <Form
              initialState={updatedRecord}
              onSubmit={onSubmit}
              cancelDestination={destination}
            />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ records }, { match }) => {
  const id = parseInt(match.params.id);
  const record = records.single
  return { record, destination: `/records/single/${id}`};
};

const mapDispatchToProps = (dispatch, { history }) => ({
  onSubmit: formState => {
    const action = updateRecord(formState);
    dispatch(action);
    history.push(`/records/single/${formState.id}`);
  },
});

const ConnectedEditForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecordForm);

export default LoadSingleRecord(ConnectedEditForm)
