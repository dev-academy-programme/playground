import * as types from '../actions/types'

const api = (state = {}, action) => {
  switch (action.type) {
    case types.API_SAVE:
      return Object.assign({}, state, { saving: true })

    case types.API_LOAD:
      return Object.assign({}, state, { loading: true })

    case types.API_ERROR:
      return Object.assign({}, state, { error: action.err })

    case types.API_END:
      return {}

    default:
      return state
  }
}

export default api
