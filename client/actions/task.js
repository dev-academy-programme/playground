import request from 'superagent'

import { apiSave, apiError, apiEnd } from './api'
import * as types from './types'

export function taskSubmitted () {
  return { type: types.TASK_SUBMITTED }
}

export function taskCorrect () {
  return { type: types.TASK_CORRECT }
}

export function taskIncorrect () {
  return { type: types.TASK_INCORRECT }
}

export const submitTask = code => {
  return (dispatch, getState) => {
    const taskId = getState().task.id
    dispatch(apiSave())
    dispatch(taskSubmitted())
    request
      .post(`/api/v1/tasks/${taskId}/check`)
      .send({ code })
      .end((err, res) => {
        if (err) {
          return dispatch(apiError(err))
        }
        if (res.notFound) {
          return dispatch(apiError({ msg: 'That task does not appear to exist.' }))
        }
        if (res.body.correct) {
          dispatch(taskCorrect())
        }
        dispatch(apiEnd())
      })
  }
}
