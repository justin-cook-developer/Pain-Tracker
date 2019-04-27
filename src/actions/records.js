import {
  getRecords as _getRecords,
  postRecord as _postRecord,
  updateRecord as _updateRecord,
  deleteRecord as _deleteRecord,
  getRecord as _getRecord
} from '../apis/records';
import { getCount } from './allRecordsUI';

// ACTION TYPES
export const RETRIEVED_RECORDS = 'RETRIEVED_RECORDS';
export const RETRIEVED_RECORD = 'RETRIEVED_RECORD';
export const NEW_RECORD = 'NEW_RECORD';
export const UPDATED_RECORD = 'UPDATED_RECORD';
export const REMOVED_RECORD = 'REMOVED_RECORD';

// ACTION CREATORS
const gotRecord = record => ({
  type: RETRIEVED_RECORD,
  record,
});

export const getRecord = id => async dispatch => {
  try {
    const record = await _getRecord(id);
    const action = gotRecord(record)
    dispatch(action)
  } catch (e) {
    console.log(e);
  }
};

const gotRecords = records => ({
  type: RETRIEVED_RECORDS,
  records,
});

export const getRecords = pageNumber => async dispatch => {
  try {
    const offset = (pageNumber - 1) * 14
    const data = await _getRecords(14, offset);
    const recordAction = gotRecords(data.rows);
    const countAction = getCount(data.count)
    dispatch(recordAction)
    dispatch(countAction)
  } catch (e) {
    console.log(e);
  }
};

const gotNewRecord = newRecord => ({
  type: NEW_RECORD,
  newRecord,
});

export const makeNewRecord = formData => async dispatch => {
  try {
    const newRecord = await _postRecord(formData)
    const action = gotNewRecord(newRecord);
    dispatch(action);
  } catch (e) {
    console.log(e);
  }
};

const gotUpdatedRecord = updatedRecord => ({
  type: UPDATED_RECORD,
  updatedRecord,
});

export const updateRecord = formData => async dispatch => {
  try {
    const updatedRecord = await _updateRecord(formData);
    const action = gotUpdatedRecord(updatedRecord);
    dispatch(action);
  } catch (e) {
    console.log(e);
  }
};

const deletedRecord = id => ({
  type: REMOVED_RECORD,
  id,
});

export const deleteRecord = id => async dispatch => {
  try {
    const result = await _deleteRecord(id);
    if (result) {
      const action = deletedRecord(id);
      dispatch(action);
    } else {
      throw new Error('Could not delete record.');
    }
  } catch (e) {
    console.log(e);
  }
};
