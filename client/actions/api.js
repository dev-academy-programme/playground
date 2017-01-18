import * as types from './types'

export const apiSave = () => {
  return {
    type: types.API_SAVE
  }
}

export const apiLoad = () => {
  return {
    type: types.API_LOAD
  }
}

export const apiError = (err) => {
  return {
    type: types.API_ERROR,
    err
  }
}

export const apiEnd = () => {
  return {
    type: types.API_END
  }
}

