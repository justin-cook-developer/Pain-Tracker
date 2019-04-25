// ACTION TYPES
export const SORT = 'SORT'
export const PAGE_NUMBER = 'PAGE_NUMBER'


// ACTION CREATORS
export const sortingMethod = method => ({
  type: SORT,
  method
})

export const changePageNumber = number => ({
  type: PAGE_NUMBER,
  number
})
