import {combineReducers} from 'redux'

import api from './api'
import task from './task'
import tasks from './tasks'

export default combineReducers({
  api,
  task,
  tasks
})

