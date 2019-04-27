// ACTION TYPES
export const SORT = 'SORT'
export const PAGE_NUMBER = 'PAGE_NUMBER'
export const TOTAL_PAGES = 'TOTAL_PAGES'


// ACTION CREATORS
export const sortingMethod = method => ({
  type: SORT,
  method
})

export const changePageNumber = number => ({
  type: PAGE_NUMBER,
  number
})

export const getCount = count => ({
  type: TOTAL_PAGES,
  count,
})
