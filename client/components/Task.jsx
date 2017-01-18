import React, {PropTypes} from 'react'
import CodeMirror from 'react-codemirror'

import __jsmode from 'codemirror/mode/javascript/javascript'
import __less from './Task.less'

export default React.createClass({
  displayName: 'Task',

  propTypes: {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  },

  render () {
    const options = {
      lineNumbers: true,
      mode: 'javascript',
      smartIndent: true,
      tabSize: 2,
      theme: 'monokai'
    }
    return (
      <div>
        {this.props.task.description}
        <CodeMirror value="// Code goes here..." options={options} />
      </div>
    )
  }
})
