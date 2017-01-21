import request from 'superagent'

import { apiLoad, apiSave, apiError, apiEnd } from './api'
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

export function loadTasks (tasks) {
  return {
    type: types.TASKS_LOAD,
    tasks
  }
}

export const getTasks = () => {
  return dispatch => {
    dispatch(apiLoad())
    request
      .get('/api/v1/tasks')
      .end((err, res) => {
        if (err) {
          return dispatch(apiError(err))
        }
        dispatch(loadTasks(res.body))
        dispatch(apiEnd())
      })
  }
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
        dispatch(res.body.correct ? taskCorrect() : taskIncorrect())
        dispatch(apiEnd())
      })
  }
}
