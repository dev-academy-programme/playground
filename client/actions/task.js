import * as types from '../actions/types'

export function submitTask () {
  return { type: types.TASK_SUBMITTED }
}

export function taskCorrect () {
  return { type: types.TASK_CORRECT }
}

export function taskIncorrect () {
  return { type: types.TASK_INCORRECT }
}
