import {
  RETRIEVED_RECORDS,
  NEW_RECORD,
  UPDATED_RECORD,
  REMOVED_RECORD,
} from '../actions/records';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVED_RECORDS: {
      const { records } = action;
      return records;
    }
    case NEW_RECORD: {
      const { newRecord } = action;
      const records = [...state, newRecord];
      return records;
    }
    case UPDATED_RECORD: {
      const { updatedRecord } = action;
      const records = state.map(record => {
        if (record.id === updatedRecord.id) {
          return updatedRecord;
        } else {
          return record;
        }
      });
      return records;
    }
    case REMOVED_RECORD: {
      const records = state.filter(record => record.id !== action.id);
      return records;
    }
    default:
      return state;
  }
};
