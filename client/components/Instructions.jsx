import React, { PropTypes } from 'react'

const Instructions = ({ content }) => (
  <div className="instructions">
    <header>
      <h2 className="instructions-head">{content.head}</h2>
      <p className="instructions-subhead">{content.subhead}</p>
    </header>
    <div className="instructions-body">{content.body}</div>
  </div>
)

Instructions.propTypes = {
  content: PropTypes.shape({
    subhead: PropTypes.string,
    body: PropTypes.string.isRequired
  })
}

export default Instructions
