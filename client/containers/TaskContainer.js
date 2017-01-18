import {connect} from 'react-redux'

import Task from '../components/Task'
import { submitTask, taskCorrect, taskIncorrect } from '../actions/task.js'

const mapStateToProps = ({ task }) => {
  return {
    task
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitTask: () => dispatch(submitTask()),
    taskCorrect: () => dispatch(taskCorrect()),
    taskIncorrect: () => dispatch(taskIncorrect())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)
