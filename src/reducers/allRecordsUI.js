import { SORT, PAGE_NUMBER } from '../actions/allRecordsUI';

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
    case PAGE_NUMBER: {
      let pageNumber = action.number
      if (pageNumber < 1) {
        pageNumber = 1
      }
      return { ...state, pageNumber }
    }
    default: {
      return state
    }
  }
}
