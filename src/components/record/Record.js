import React from 'react';
import { connect } from 'react-redux';

import { deleteRecord } from '../../actions/records';
import RecordDumb from './RecordDumb';

const Record = ({ record, removeRecord }) => (
  <RecordDumb record={record} handleClick={removeRecord} />
);

const mapStateToProps = ({ records }, { match }) => {
  const id = parseInt(match.params.id);
  const record = records.find(record => record.id === id);
  return { record };
};

const mapDispatchToProps = (dispatch, { history, match }) => ({
  removeRecord: () => {
    const id = parseInt(match.params.id);
    const action = deleteRecord(id);
    dispatch(action);
    history.push('/records');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
