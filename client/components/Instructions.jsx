import React, { PropTypes } from 'react'

const Instructions = ({ content }) => (
  <div className="instructions" dangerouslySetInnerHTML={{ __html: content }}></div>
)

Instructions.propTypes = {
  content: PropTypes.string
}

export default Instructions
