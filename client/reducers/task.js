import * as types from '../actions/types'

const initial = {
  id: 0,
  description: 'Task',
  instructions: {
    head: 'Empty object literal',
    subhead: 'Creating blank objects: sound simple?',
    body: 'Assign an empty object literal to a variable named `obj`.'
  }
}

const tasks = (state = initial, action) => {
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
