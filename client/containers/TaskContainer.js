import {connect} from 'react-redux'

import Task from '../components/Task'

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

export default connect(
  mapStateToProps
)(Task)
