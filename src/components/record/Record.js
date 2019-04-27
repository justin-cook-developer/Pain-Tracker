import React from 'react';
import { connect } from 'react-redux';

import { deleteRecord } from '../../actions/records';
import RecordDumb from './RecordDumb';
import LoadSingleRecord from '../loadASingleRecord/LoadSingleRecord';
import IsLoading from '../isLoading/IsLoading';

const Record = ({ record, removeRecord, pageNumber, retrieveRecord }) => {
  if (!record || record.date === undefined) {
    return <IsLoading />
  } else {
    return <RecordDumb record={record} handleClick={removeRecord(pageNumber)} retrieveRecord={retrieveRecord} />
  }
}

const mapStateToProps = ({ records, allRecordsUI: ui }) => {
  const { pageNumber } = ui
  const record = records.single
  return { pageNumber };
};

const mapDispatchToProps = (dispatch, { history, match }) => ({
  removeRecord: pageNumber => () => {
    const id = parseInt(match.params.id)
    const action = deleteRecord(id)
    dispatch(action);
    history.push(`/records/${pageNumber}`);
  },
});

const ConnectedRecord = connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);


export default LoadSingleRecord(ConnectedRecord)
