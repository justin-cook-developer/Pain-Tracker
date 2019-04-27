import React from 'react';
import { connect } from 'react-redux';

import { makeNewRecord } from '../../actions/records';
import Form from '../form/Form';

const NewRecordForm = ({ onSubmit, cancelDestination }) => (
  <Form onSubmit={onSubmit} cancelDestination={cancelDestination} />
);

const mapStateToProps = ({ allRecordsUI: ui }) => {
  const { pageNumber } = ui
  const cancelDestination = `/records/${pageNumber}`
  return { cancelDestination }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  onSubmit: async formData => {
    const action = makeNewRecord(formData);
    await dispatch(action);
    history.push('/records/1');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecordForm);
