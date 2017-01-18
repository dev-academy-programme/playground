import React, {PropTypes} from 'react'
import CodeMirror from 'react-codemirror'

import Instructions from './Instructions'

import __jsmode from 'codemirror/mode/javascript/javascript'
import __less from './Task.less'

export default React.createClass({
  displayName: 'Task',

  getInitialState () {
    return {
      code: '// Code goes here...'
    }
  },

  updateCode (code) {
    this.setState({ code })
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
      <div className="task">
        <div className={`task-message ${this.props.task.correct ? 'green' : 'red'}`}>{this.props.task.correct ? 'Great!' : this.props.task.description}</div>
        <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
        <button onClick={() => this.props.submitTask(this.state.code)}>Submit</button>
        <Instructions content={this.props.task.instructions} />
      </div>
    )
  },

  propTypes: {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      instructions: PropTypes.shape({
        head: PropTypes.string.isRequired,
        subhead: PropTypes.string,
        body: PropTypes.string.isRequired
      }),
      correct: PropTypes.boolean,
      submitted: PropTypes.boolean
    }).isRequired
  }
})
