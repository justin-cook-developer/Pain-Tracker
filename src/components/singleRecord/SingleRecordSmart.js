import React from 'react';
import { connect } from 'react-redux';

import { deleteRecord } from '../../apis/json';
import SingleRecord from './SingleRecordDumb';

const SingleRecordSmart = props => <SingleRecord {...props} />

const mapDispatchToProps = (dispatch, { record }) => ({
  handleClick: e => {
    e.stopPropagation()
    const action = deleteRecord(record.id)
    dispatch(action)
  },
})

export default connect(null, mapDispatchToProps)(SingleRecordSmart)
