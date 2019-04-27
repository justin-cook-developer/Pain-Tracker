import React from 'react';
import { connect } from 'react-redux';

import { deleteRecord } from '../../actions/records';
import RecordDumb from './RecordDumb';

const Record = ({ record, removeRecord, pageNumber }) => (
  <RecordDumb record={record} handleClick={removeRecord(pageNumber)} />
);

const mapStateToProps = ({ records, allRecordsUI: ui }, { match }) => {
  const id = parseInt(match.params.id)
  const { pageNumber } = ui
  const record = records.find(record => record.id === id);
  return { record, pageNumber };
};

const mapDispatchToProps = (dispatch, { history, match }) => ({
  removeRecord: pageNumber => () => {
    const id = parseInt(match.params.id)
    const action = deleteRecord(id)
    dispatch(action);
    history.push(`/records/${pageNumber}`);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
