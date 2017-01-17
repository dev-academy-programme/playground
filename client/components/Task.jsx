import React, {PropTypes} from 'react'

const Task = ({task}) => (
  <div>
    {task.description}
  </div>
)

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Task
