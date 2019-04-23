import { SORT } from '../actions/allRecordsUI';

const initialState = {
  sortBy: 'Date: Most Recent',
  search: '',
  pageNumber: 1
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SORT: {
      return { ...state, sortBy: action.method }
    }
    default: {
      return state
    }
  }
}
