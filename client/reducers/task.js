import * as types from '../actions/types'

const tasks = (state = { id: 0, description: 'Task' }, action) => {
  switch (action.type) {
    case types.TASK_CORRECT:
      return Object.assign({}, state, { correct: true })

    case types.TASK_INCORRECT:
      return Object.assign({}, state, { correct: false })

    case types.TASK_SUBMITTED:
      return Object.assign({}, state, { submitted: true })

    default:
      return state
  }
}

export default tasks
