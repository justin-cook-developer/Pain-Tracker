import React from 'react';
import { connect } from 'react-redux';

import { updateRecord } from '../../actions/records';
import Form from '../form/Form';

const makeValidDate = str => {
  const [year, month, other] = str.split('-')
  const day = other.slice(0, 2)
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

const EditRecordForm = ({ onSubmit, record, destination }) => <Form initialState={record} onSubmit={onSubmit} cancelDestination={destination} />

const mapStateToProps = ({ records }, { match }) => {
  const id = parseInt(match.params.id)
  const record = records.find(record => record.id === id)
  const { date } = record
  const newDate = makeValidDate(date)
  const updatedRecord = { ...record, date: newDate }
  return { record: updatedRecord, destination: `/records/single/${id}` }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  onSubmit: formState => {
    const { id } = formState
    const action = updateRecord(id, formState)
    dispatch(action)
    history.push(`/records/single/${id}`)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRecordForm)
