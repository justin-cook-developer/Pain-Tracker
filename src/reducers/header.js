import { TOGGLE_ACTIVE } from '../actions/header'

const initialState = {
  isActive: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE: {
      const isActive = !state.isActive
      return { ...state, isActive }
    }
    default:
      return state
  }
}
