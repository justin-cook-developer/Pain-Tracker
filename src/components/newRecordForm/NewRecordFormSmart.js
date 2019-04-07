import React from 'react';
import { connect } from 'react-redux';

import { makeNewRecord } from '../../actions/records';
import Form from '../form/Form';

const NewRecordForm = ({ onSubmit }) => <Form onSubmit={onSubmit} cancelDestination={'/records'} />

const mapDispatchToProps = (dispatch, { history }) => ({
  onSubmit: formData => {
    const action = makeNewRecord(formData)
    dispatch(action)
    history.push('/records')
  }
})

export default connect(null, mapDispatchToProps)(NewRecordForm)
