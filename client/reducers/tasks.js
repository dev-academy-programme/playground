import * as types from '../actions/types'

const tasks = (state = [], action) => {
  switch (action.type) {
    case types.TASKS_LOAD:
      return [...action.tasks]

    default:
      return state
  }
}

export default tasks
