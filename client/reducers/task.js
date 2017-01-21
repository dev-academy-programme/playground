import * as types from '../actions/types'

const task = (state = { id: 0, title: '', title: 'Loading...', instructions: { body: '' } }, action) => {
  switch (action.type) {
    case types.TASK_CORRECT:
      return Object.assign({}, state, { correct: true })

    case types.TASK_INCORRECT:
      return Object.assign({}, state, { correct: false })

    case types.TASK_SUBMITTED:
      return Object.assign({}, state, { submitted: true })

    case types.TASK_NEXT:
      return { ...action.task }

    default:
      return state
  }
}

export default task
