const tasks = (state = { id: 0, description: 'Task' }, action) => {
  switch (action.type) {
    case 'TASK_CORRECT':
      return Object.assign({}, state, { correct: true })

    default:
      return state
  }
}

export default tasks
