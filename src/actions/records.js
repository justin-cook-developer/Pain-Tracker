import { getRecords as _getRecords, postRecord as _postRecord, updateRecord as _updateRecord, deleteRecord as _deleteRecord  } from '../apis/json';

// ACTION TYPES
export const RETRIEVED_RECORDS = 'RETRIEVED_RECORDS'
export const NEW_RECORD = 'NEW_RECORD'
export const UPDATED_RECORD = 'UPDATED_RECORD'
export const REMOVED_RECORD = 'REMOVED_RECORD'

// ACTION CREATORS
const gotRecords = records => ({
  type: RETRIEVED_RECORDS,
  records,
})

export const getRecords = () => async dispatch => {
  try {
    const records =  await _getRecords(10)
    const action = gotRecords(records)
    dispatch(action)
  } catch(e) {
    console.log(e)
  }
}


const gotNewRecord = newRecord => ({
  type: NEW_RECORD,
  newRecord,
})

export const makeNewRecord = formData => async dispatch => {
  try {
    const newRecord = await _postRecord(formData)
    const action = gotNewRecord(newRecord)
    dispatch(action)
  } catch(e) {
    console.log(e)
  }
}


const gotUpdatedRecord = updatedRecord => ({
  type: UPDATED_RECORD,
  updatedRecord,
})

export const updateRecord = (id, formData) => async dispatch => {
  try {
    const updatedRecord =  await _updateRecord(id, formData)
    const action = gotUpdatedRecord(updatedRecord)
    dispatch(action)
  } catch(e) {
    console.log(e)
  }
}


const deletedRecord = id => ({
  type: REMOVED_RECORD,
  id,
})

export const deleteRecord = id => async dispatch => {
  try {
    const result =  await _deleteRecord(id)
    if (result) {
      const action = deletedRecord(id)
      dispatch(action)
    } else {
      throw new Error('Could not delete record.')
    }
  } catch(e) {
    console.log(e)
  }
}
