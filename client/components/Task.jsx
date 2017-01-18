import React, {PropTypes} from 'react'
import CodeMirror from 'react-codemirror'

import __jsmode from 'codemirror/mode/javascript/javascript'
import __less from './Task.less'

export default React.createClass({
  displayName: 'Task',

  render () {
    const options = {
      lineNumbers: true,
      mode: 'javascript',
      smartIndent: true,
      tabSize: 2,
      theme: 'monokai'
    }
    return (
      <div className={this.props.task.correct ? 'green' : 'red'}>
        {this.props.task.description}
        <CodeMirror value="// Code goes here..." options={options} />
      </div>
    )
  },

  propTypes: {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      correct: PropTypes.boolean,
      submitted: PropTypes.boolean
    }).isRequired
  },
})
