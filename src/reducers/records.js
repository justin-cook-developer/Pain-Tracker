import { RETRIEVED_RECORDS, NEW_RECORD, UPDATED_RECORD, REMOVED_RECORD } from '../actions/records';

const initialState = {
  records: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVED_RECORDS: {
      const { records } = action
      return { ...state, records }
    }
    case NEW_RECORD: {
      const { newRecord } = action
      const records = [...state.records, newRecord]
      return { ...state, records }
    }
    case UPDATED_RECORD: {
      const { updatedRecord } = action
      const records = state.records.map(record => {
        if (record.id === updatedRecord.id) {
          return updatedRecord
        } else {
          return record
        }
      })
      return { ...state, records }
    }
    case  REMOVED_RECORD: {
      const records = state.records.filter(record => record.id !== action.id)
      return { ...state, records }
    }
    default:
      return state
  }
}
