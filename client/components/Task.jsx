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

  componentDidMount () {
    this.props.getTasks()
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
        <div className={`task-message ${this.props.task.correct ? 'green' : 'red'}`}>{this.props.task.correct ? 'Great!' : this.props.task.title}</div>
        <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
        <button onClick={() => this.props.submitTask(this.state.code)}>Submit</button>
        <Instructions content={this.props.task.instructions} />
      </div>
    )
  },

  propTypes: {
    getTasks: PropTypes.func.isRequired,
    submitTask: PropTypes.func.isRequired,
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      instructions: PropTypes.string,
      correct: PropTypes.boolean,
      submitted: PropTypes.boolean
    }).isRequired
  }
})
