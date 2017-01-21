import {connect} from 'react-redux'

import Task from '../components/Task'
import { getTasks, submitTask } from '../actions/task.js'

const mapStateToProps = ({ task }) => {
  return {
    task
  }
}

export default connect(
  mapStateToProps,
  { getTasks, submitTask }
)(Task)
