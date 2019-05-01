import {
  RETRIEVED_RECORDS,
  NEW_RECORD,
  UPDATED_RECORD,
  REMOVED_RECORD,
  RETRIEVED_RECORD,
} from '../actions/records';

const initialState = {
  all: [],
  single: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVED_RECORD: {
      const { record } = action
      return { ...state, single: record }
    }
    case RETRIEVED_RECORDS: {
      const { records } = action;
      return { ...state, all: records };
    }
    // Not currently using b/c of route redirect on form submission; causes new all recs fetch
    // case NEW_RECORD: {
    //   const { newRecord } = action;
    //   const records = [...state, newRecord];
    //   return records;
    // }
    case UPDATED_RECORD: {
      const { updatedRecord } = action;
      return { ...state, single: updatedRecord };
    }
    case REMOVED_RECORD: {
      const records = state.all.filter(record => record.id !== action.id);
      return { ...state, all: records };
    }
    default:
      return state;
  }
};
