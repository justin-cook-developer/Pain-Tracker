import { SORT, PAGE_NUMBER, TOTAL_PAGES } from '../actions/allRecordsUI';
import { NEW_RECORD } from '../actions/records';

const initialState = {
  sortBy: 'Date: Most Recent',
  search: '',
  pageNumber: 1,
  count: null
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
    case TOTAL_PAGES: {
      const { count } = action
      return { ...state, count }
    }
    case NEW_RECORD: {
      return { ...state, sortBy: 'Date: Most Recent' }
    }
    default: {
      return state
    }
  }
}
