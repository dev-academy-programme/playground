import {combineReducers} from 'redux'

import api from './api'
import task from './task'

export default combineReducers({
  api,
  task
})

